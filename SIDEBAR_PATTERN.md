# Padrão de sidebar do Sai Creative System

Este é o padrão oficial de sidebar para todo app do ecossistema (brandsystem,
imagesystem, e os que vierem — briefing, content, approval). Ele existe pra
que os apps parem de reinventar a sidebar cada um do seu jeito (cores
hardcoded `indigo-*`/`zinc-*` num lado, tokens semânticos `bg-sidebar-accent`
no outro) e convirjam pro mesmo visual e pros mesmos tokens de tema.

O visual de referência (posição do "Perfil"/nome da marca, ícone quadrado,
chevron etc.) foi extraído do imagesystem
(`src/app/(dashboard)/layout.tsx`, ~linhas 240-263), que já estava correto.
Os componentes abaixo empacotam esse padrão pra reuso.

## Estrutura de composição

```
SidebarShell                          (casca: <aside>, cor/borda, scroll, footer fixo)
├─ AppSwitcher                        (topo: nome do sistema + troca de sistema)
├─ SidebarBrandSelector                (se o sistema for organizado por marca)
├─ SidebarNavSection                  (uma ou mais seções)
│  └─ SidebarNavItem (× N)
├─ SidebarNavSection
│  └─ SidebarNavItem (× N)
└─ footer (prop de SidebarShell: <SidebarUserFooter>)
```

Nem todo sistema precisa de `SidebarBrandSelector` — sistemas que não são
organizados por marca (ex.: um futuro painel puramente administrativo) podem
pular direto de `AppSwitcher` pras `SidebarNavSection`s.

## Componentes

### `SidebarShell`

Casca da sidebar: `<aside>` com `bg-sidebar text-sidebar-foreground
border-r border-sidebar-border`, largura fixa (`w-64`), conteúdo (`children`)
rolável e `footer` fixo embaixo com `border-t border-sidebar-border`. Não
inclui responsividade mobile (hambúrguer/overlay) — isso é decisão de cada
app, normalmente com um `Dialog` do próprio pacote reaproveitando o mesmo
conteúdo (ver exemplo no imagesystem).

### `AppSwitcher`

Cabeçalho "NomeDoApp" / "by Sai Creative" com um trigger de chevron que abre
um `Popover` listando os `systems` do catálogo compartilhado (tabela
`systems` no Supabase, já filtrada por RLS de quem chama). Cada item mostra
ícone + label; se `system.url` for `null`, o item aparece desabilitado com
"Em breve" em vez de virar link.

- `systemIcons` é opcional: mapeie `key → React.ReactNode`. Qualquer `key`
  sem mapeamento cai num ícone de grid genérico (SVG inline, sem depender de
  lucide-react).
- O pacote não faz a query em `systems` — isso é responsabilidade do app
  (Server Component/Server Action, ou client fetch), que passa o array via
  prop `systems` e `loading`.

### `SidebarBrandSelector`

Seletor de marca/perfil, usando o `Select` do pacote. Visual: quadrado
`size-9 rounded-md bg-muted` como "avatar", rótulo "Perfil" em
`text-xs text-muted-foreground`, nome da marca em
`text-base font-semibold text-foreground` truncado.

- `footer`: slot abaixo da lista de marcas (ex.: brandsystem usa isso pra
  "+ Nova marca", ação admin-only que o imagesystem não tem).
- `renderBrandExtra(brand)`: slot por item (ex.: botão de excluir marca,
  admin-only). **Cuidado**: esse conteúdo fica dentro do item selecionável do
  `Select`; se ele tiver seu próprio `onClick`, chame
  `event.stopPropagation()` para não disparar a seleção da marca junto do
  clique na ação.
- `logoUrl?: string | null` (campo opcional de `BrandOption`): se presente,
  renderiza um `<img className="size-full object-cover">` dentro do quadrado
  `size-9` do avatar, no lugar do vazio padrão — nunca substitui o rótulo
  "Perfil"/nome da marca ao lado, só preenche o próprio quadrado. É **só uma
  capacidade de exibição**: o componente não sabe de onde vem a URL nem
  contém lógica de upload/clique para trocar a imagem — cada app consumidor é
  responsável por buscar o `logo_path`/URL da própria marca (ex.: coluna
  `brands.logo_path` no brandsystem) e passar `logoUrl` já resolvido no array
  de `brands`.

### `SidebarNavSection` / `SidebarNavItem`

`SidebarNavSection` agrupa itens sob um rótulo opcional tipo "BIBLIOTECA"
(eyebrow). `SidebarNavItem` renderiza um `<a>` simples — o pacote **não**
depende de Next.js, então não usa `next/link`. Isso é uma limitação
documentada: se o app quiser client-side routing (sem full reload), ele deve
compor o próprio wrapper de `Link` por cima, ou aceitar o full reload do
`<a>` puro. O estado ativo usa só tokens semânticos:

- ativo: `bg-sidebar-accent text-sidebar-accent-foreground`
- inativo: `text-muted-foreground hover:bg-sidebar-accent/50`

Nunca `indigo-*`/`zinc-*` hardcoded — é assim que os dois apps divergiram
visualmente antes deste pacote existir.

`icon` é sempre um `React.ReactNode` já renderizado (cada app importa sua
própria lib de ícones — lucide-react, SVG inline etc.); o pacote não escolhe
ícones de nav por você. `statusIndicator` é um slot opcional pra sinalizar
algo à direita do label (ex.: checkmark verde de "validado").

### `SidebarUserFooter`

Rodapé padrão passado via prop `footer` de `SidebarShell`: avatar circular com
as duas primeiras letras do e-mail (maiúsculas), e-mail, papel opcional
abaixo (ex.: "admin"), e botão "Sair" com ícone `LogOut`. Antes deste
componente existir, os três apps (brandsystem, briefingsystem, imagesystem)
tinham cada um sua própria versão inline desse bloco — divergentes entre si
(brandsystem tinha avatar+papel, briefingsystem só e-mail+ícone, imagesystem
não tinha nada) — padronizado nesta versão.

- `email?: string | null` — quando ausente/vazio, só o botão "Sair" é
  renderizado (sem o bloco de avatar). Útil pro instante entre montar a
  sidebar e a sessão do usuário carregar.
- `role?: string | null` — omita em apps single-role (ex.: briefingsystem, que
  não tem o conceito de admin/editor); só aparece quando presente.
- `onLogout: () => void` — cada app implementa seu próprio `signOut()` +
  redirect pra `/login` e passa aqui; o componente não sabe de Supabase Auth
  nem de rotas.

## Exemplo mínimo de composição

```tsx
"use client"

import {
  SidebarShell,
  AppSwitcher,
  SidebarBrandSelector,
  SidebarNavSection,
  SidebarNavItem,
  SidebarUserFooter,
  Separator,
} from "@sai-creative/ui"
import { ImageIcon, FolderOpen, Palette } from "lucide-react"

const NAV_ITEMS = [
  { href: "/brands", label: "Perfil de marca", icon: <Palette className="size-4" /> },
  { href: "/generate", label: "Gerar Imagens", icon: <ImageIcon className="size-4" /> },
  { href: "/library", label: "Banco de Imagens", icon: <FolderOpen className="size-4" /> },
]

export function AppSidebar({ pathname, systems, brands, selectedBrandId, setSelectedBrandId, user, onLogout }) {
  return (
    <SidebarShell
      footer={<SidebarUserFooter email={user.email} role={user.role} onLogout={onLogout} />}
    >
      <div className="px-4 py-6">
        <AppSwitcher appName="Image System" systems={systems} />
      </div>

      <Separator />

      <div className="px-4 py-4">
        <SidebarBrandSelector
          brands={brands}
          selectedBrandId={selectedBrandId}
          onSelect={setSelectedBrandId}
        />
      </div>

      <Separator />

      <SidebarNavSection>
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem
            key={item.href}
            {...item}
            active={pathname === item.href || pathname?.startsWith(`${item.href}/`)}
          />
        ))}
      </SidebarNavSection>
    </SidebarShell>
  )
}
```

## Decisões de design tomadas (sem info explícita no pedido original)

- **Ícones do `AppSwitcher`**: fallback é um SVG de grid 2x2 inline, não
  lucide-react — mesmo o pacote já tendo `lucide-react` como dependência
  (usado em `select.tsx`, `button.tsx` etc.), para não acoplar o ícone
  genérico do switcher a essa lib especificamente, conforme pedido.
- **`renderBrandExtra`**: implementado como children extra dentro do
  `SelectItem` (não como um slot totalmente fora da área clicável), porque o
  `Select` do pacote (`@base-ui/react/select`) não expõe um jeito nativo de
  renderizar conteúdo não-selecionável dentro de um item. Documentei a
  necessidade de `stopPropagation()` no app consumidor.
- **`SidebarNavItem` sem `next/link`**: uso de `<a>` puro é intencional (o
  pacote não deve depender de Next.js); full page reload é uma limitação
  aceita — cada app pode envolver com seu próprio `Link` se quiser evitar
  isso.
- **Nenhum dos 4 arquivos novos tem `"use client"` no topo**: seguindo o
  padrão já existente em `button.tsx`/`card.tsx` (que compõem primitivas como
  `Popover`/`Select`, essas sim com `"use client"` próprio, sem precisar
  redeclarar o boundary em quem só compõe JSX sem hooks locais).
- **Responsividade mobile não faz parte de `SidebarShell`**: o componente é
  só a casca desktop; overlay/hambúrguer mobile fica a critério de cada app
  (ex.: reaproveitar o mesmo conteúdo dentro de um `Dialog`), como já faz o
  imagesystem hoje.
- **Nenhum affordance de clique pode ser aninhado dentro de `SidebarBrandSelector`**:
  o `SelectTrigger` do `@base-ui/react/select` (usado internamente pelo
  `Select` do pacote) renderiza como um `<button>` HTML nativo, então não é
  possível colocar outro `<button>` dentro dele — HTML inválido e clique
  quebrado. Qualquer recurso extra de clique sobre o avatar `size-9` (ex.:
  upload de logo/pictograma) precisa ser um elemento **irmão** de
  `SidebarBrandSelector` no DOM, posicionado por cima com `absolute`. O
  brandsystem faz isso com um wrapper `<div className="relative">` envolvendo
  os dois, e o botão de upload como
  `absolute left-3 top-1/2 -translate-y-1/2 size-9` (replica o padding
  `px-3`/centralização vertical do trigger para cair exatamente sobre o
  quadrado do avatar) — use o mesmo padrão em outros apps que quiserem essa
  affordance em vez de tentar aninhar dentro do trigger.
