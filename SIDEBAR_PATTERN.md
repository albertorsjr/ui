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
└─ footer (prop de SidebarShell: usuário + sair)
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

## Exemplo mínimo de composição

```tsx
"use client"

import {
  SidebarShell,
  AppSwitcher,
  SidebarBrandSelector,
  SidebarNavSection,
  SidebarNavItem,
  Separator,
  Button,
} from "@sai-creative/ui"
import { ImageIcon, FolderOpen, Palette, LogOut } from "lucide-react"

const NAV_ITEMS = [
  { href: "/brands", label: "Perfil de marca", icon: <Palette className="size-4" /> },
  { href: "/generate", label: "Gerar Imagens", icon: <ImageIcon className="size-4" /> },
  { href: "/library", label: "Banco de Imagens", icon: <FolderOpen className="size-4" /> },
]

export function AppSidebar({ pathname, systems, brands, selectedBrandId, setSelectedBrandId, user }) {
  return (
    <SidebarShell
      footer={
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <span className="truncate text-sm text-muted-foreground">{user.email}</span>
          <Button variant="ghost" size="icon-sm" aria-label="Sair">
            <LogOut className="size-4" />
          </Button>
        </div>
      }
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
