"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { Check, X } from "lucide-react"

import { cn } from "../utils"

/**
 * Balão "?" ao lado do nome de um campo de conteúdo: o que vai e o que não
 * vai nele, um bom exemplo e um que confunde a IA. Abre só no clique.
 *
 * O texto mora aqui (GUIA_CAMPOS) para o Brand System, o Briefing System e o
 * manual do Hub lerem da mesma fonte. Exemplos neutros de propósito: servem
 * para qualquer marca (o balão do produto mostra antes um exemplo da própria marca).
 */

export type CamadaConteudo = "marca" | "publico" | "momento" | "campanha" | "peca" | "produto"

/**
 * As cinco camadas e, ao lado, o produto: não é uma sexta camada na fila, é o
 * "o quê" que a campanha aponta (por isso vem por último e com outro desenho).
 */
export const CAMADAS_CONTEUDO: { id: CamadaConteudo; nome: string; pergunta: string }[] = [
  { id: "marca", nome: "Marca", pergunta: "A frase vale para qualquer público e qualquer campanha?" },
  { id: "publico", nome: "Público", pergunta: "A frase vale para qualquer campanha deste público?" },
  { id: "momento", nome: "Momento", pergunta: "A frase vale para qualquer produto e qualquer público?" },
  { id: "campanha", nome: "Campanha", pergunta: "A frase vale para todas as peças desta campanha?" },
  { id: "peca", nome: "Peça", pergunta: "A frase vale só para esta peça?" },
  { id: "produto", nome: "Produto", pergunta: "A frase vale em qualquer campanha, público e momento deste produto?" },
]

export interface GuiaCampo {
  titulo: string
  subtitulo: string
  camada: CamadaConteudo
  vai: string
  naoVai: string
  bom: string
  /** Segundo exemplo bom, de outro tipo de produto (ex.: serviço × produto físico). */
  bom2?: string
  ruim: string
  porqueRuim: string
}

export const GUIA_CAMPOS = {
  dosDonts: {
    titulo: "Do’s e Don’ts",
    subtitulo: "Regras que valem para toda a marca",
    camada: "marca",
    vai: "O que vale para qualquer peça, qualquer público e qualquer campanha.",
    naoVai: "Tratamento de um público (vai no Tom dele) ou regra de uma campanha só.",
    bom: "Não prometer resultado sem comprovação.",
    ruim: "Fale com o gestor, não com o dono.",
    porqueRuim: "Vale para um público só. Aqui, chega em todos.",
  },
  perfil: {
    titulo: "Perfil",
    subtitulo: "Quem é este público",
    camada: "publico",
    vai: "Fatos sobre o negócio, quem lê a mensagem e situações reais da rotina. Num público geral, só situações que valem para todo ramo.",
    naoVai: "Argumento de produto, regra de campanha, vocabulário (vai no Tom) e pesquisa ou estimativa (vai em Docs).",
    bom: "Lojas de bairro com até 3 funcionários; o dono atende no balcão. Rotina: movimento forte no fim de semana, fechamento do caixa à noite.",
    ruim: "Mostre que o novo app resolve o fechamento do caixa.",
    porqueRuim: "É argumento de uma campanha. Quando ela acabar, o público continua dizendo isso.",
  },
  tom: {
    titulo: "Tom",
    subtitulo: "Como falar com este público",
    camada: "publico",
    vai: "Registro, tratamento (você ou o negócio) e palavras próprias deste público.",
    naoVai: "Frase pronta de campanha (vai no Foco). Proibição de toda a marca (vai em Do’s e Don’ts).",
    bom: "Consultivo e direto. Fale com o negócio, não com a pessoa: “para a sua empresa”, não “pra você”.",
    ruim: "Use: “Seu caixa pode fazer mais por você”.",
    porqueRuim: "É frase de uma campanha: a IA repete em todas as peças deste público.",
  },
  gatilho: {
    titulo: "Gatilho principal",
    subtitulo: "O que este público quer resolver",
    camada: "publico",
    vai: "A vontade ou o problema do público, em uma ou duas frases. Vale para qualquer campanha.",
    naoVai: "Lista de produtos, ações (“produto → ação”) ou meta de campanha (vai no Objetivo).",
    bom: "Gastar menos tempo com o caixa e mais com o cliente.",
    ruim: "Ativar o cashback de novembro.",
    porqueRuim: "É a meta de uma campanha, não o que o público quer.",
  },
  contexto: {
    titulo: "Contexto",
    subtitulo: "O momento da relação com o produto",
    camada: "momento",
    vai: "Em que momento o cliente está (nunca usou, usa pouco, vai cancelar) e o que a peça faz nele. Vale para qualquer produto e qualquer público.",
    naoVai: "Tom ou vocabulário de um público (vai no Brand System).",
    bom: "Primeiro uso: a pessoa tem o recurso e nunca usou. A peça mostra um primeiro passo curto e concreto.",
    ruim: "Primeiro uso: fale com o gestor, sem “pra você”.",
    porqueRuim: "É tratamento de um público. Aqui, chega em todos os públicos que usam o preset.",
  },
  argumento: {
    titulo: "Argumento",
    subtitulo: "A linha de raciocínio neste momento",
    camada: "momento",
    vai: "O papel da peça neste momento, de um jeito que sirva para qualquer produto. Se o caminho muda para quem já é cliente e para quem ainda não é, crie um Argumento para cada.",
    naoVai: "Dados de um produto (vêm do Brand System) ou de uma campanha (vão no Overview).",
    bom: "Complementaridade: para quem já é cliente, partir do que ele já tem e mostrar o que outra solução acrescenta.",
    ruim: "Falar do lembrete por SMS do AgendaFácil.",
    porqueRuim: "É fato de um produto. Na próxima campanha, com outro produto, a IA repete o SMS.",
  },
  condicoes: {
    titulo: "Condições exclusivas",
    subtitulo: "Exceções que valem só aqui",
    camada: "momento",
    vai: "Uma exceção que vale só para as campanhas deste preset, como uma condição diferente da condição fixa do produto. Em geral entra pelo aviso de divergência (“vale só para esta campanha”).",
    naoVai: "Regra permanente de um público (vai no Tom), da marca (vai em Do’s e Don’ts) ou condição que vale sempre (vai no produto).",
    bom: "Nesta régua, a primeira mensalidade sai por R$ 9,90.",
    ruim: "Para empresas maiores, evite “pra você”.",
    porqueRuim: "É regra de um público. Aqui, atinge todo público que usa o preset.",
  },
  overview: {
    titulo: "Overview",
    subtitulo: "O que há de novo nesta campanha",
    camada: "campanha",
    vai: "Só o que esta campanha traz de novo: lançamento, disponibilidade, promoção com prazo, mecânica e restrições desta ação.",
    naoVai: "A descrição e as condições fixas do produto (vêm do Brand System), quem é o público (Brand System) e o momento, como Primeiro uso (preset).",
    bom: "AgendaFácil chega para clínicas do plano Básico; até 30/11, os 2 primeiros meses sem mensalidade.",
    ruim: "O AgendaFácil é um aplicativo que agenda consultas e lembra o paciente por SMS.",
    porqueRuim: "Repete o cadastro do produto: a IA recebe a mesma coisa duas vezes, com palavras diferentes.",
  },
  objetivo: {
    titulo: "Objetivo",
    subtitulo: "A mudança que a campanha quer causar",
    camada: "campanha",
    vai: "O que deve mudar no comportamento do cliente e como saber se deu certo, em uma ou duas frases.",
    naoVai: "A descrição do produto (já está no Overview).",
    bom: "Fazer a clínica agendar a primeira consulta pelo app em 30 dias. Medida: primeiro agendamento.",
    ruim: "Apresentar o AgendaFácil e suas vantagens.",
    porqueRuim: "Descreve o conteúdo, não a mudança que se espera.",
  },
  foco: {
    titulo: "Foco da comunicação",
    subtitulo: "O que só esta peça tem",
    camada: "peca",
    vai: "A ideia e o ângulo, a situação da rotina escolhida e a frase que precisa sair igual (marcada como obrigatória).",
    naoVai: "Quem é o público, o momento (Contexto, Argumento) e o vocabulário dele: já chegam sozinhos.",
    bom: "Ideia: o paciente que falta custa caro. Situação: a agenda da segunda-feira. Título obrigatório: “Quantas faltas teve sua agenda esta semana?”",
    ruim: "Empresas maiores, evite “pra você”. É o primeiro uso, então incentive a usar.",
    porqueRuim: "Repete o Tom do público e o Contexto do preset: a IA dá peso dobrado.",
  },
  produtoResumo: {
    titulo: "O que é",
    subtitulo: "O produto em uma ou duas frases",
    camada: "produto",
    vai: "O que é e que problema resolve. É a linha que a IA usa quando o catálogo é grande.",
    naoVai: "Preço, taxa ou prazo (vão em Condições comerciais ou no Overview). Frase de venda ou chamada para ação (vai no Foco).",
    bom: "Aplicativo que agenda consultas e lembra o paciente no dia anterior.",
    bom2: "Mochila impermeável para levar notebook de até 15 polegadas.",
    ruim: "A solução perfeita para turbinar o seu negócio!",
    porqueRuim: "Não diz o que o produto é, e a IA leva o tom de venda para todas as peças.",
  },
  produtoComoFunciona: {
    titulo: "O que tem e o que faz",
    subtitulo: "Os fatos do produto",
    camada: "produto",
    vai: "Um fato por linha: o que o produto tem, o que faz e como opera. Especificações entram aqui (medidas, capacidade, material, acabamento, recursos).",
    naoVai: "O que o cliente ganha (vai em Benefícios). O que o cliente faz (vai em Como usar). Preço e prazo (vão em Condições comerciais).",
    bom: "Envia lembrete por SMS 24 horas antes da consulta.",
    bom2: "Tecido impermeável, compartimento acolchoado, 25 litros.",
    ruim: "Mais praticidade no seu dia a dia.",
    porqueRuim: "É benefício genérico, não um fato do produto. Não ajuda a IA a explicar o que ele é.",
  },
  produtoParaQuem: {
    titulo: "Para quem e requisitos",
    subtitulo: "Quem pode usar e o que precisa ter",
    camada: "produto",
    vai: "Quem pode usar, equipamento, conta ou instalação necessária, compatibilidade, quem mais usa.",
    naoVai: "Preço, taxa, cashback, isenção e prazo: vão em Condições comerciais, se forem fixos, ou no Overview da campanha.",
    bom: "Clínicas com agenda on-line ativa.",
    bom2: "Notebooks de até 15 polegadas.",
    ruim: "Frete grátis nas compras acima de R$ 200.",
    porqueRuim: "É condição comercial. Aqui, a IA trata como requisito e repete em toda campanha.",
  },
  produtoComoUsar: {
    titulo: "Como usar",
    subtitulo: "O passo a passo para começar",
    camada: "produto",
    vai: "Um passo por linha, na ordem: o que o cliente faz. Não precisa numerar: o sistema numera.",
    naoVai: "Passos de uma ação específica, como participar de uma promoção (vão no Overview). Ganho ou condição no meio do passo.",
    bom: "Cadastre o paciente com o número do celular.",
    bom2: "Abra o zíper lateral e encaixe o notebook no compartimento.",
    ruim: "Baixe agora o app e aproveite!",
    porqueRuim: "É chamada para ação, não um passo. O CTA de cada peça vem do briefing.",
  },
  produtoBeneficios: {
    titulo: "Benefícios",
    subtitulo: "O que o cliente ganha, como fato",
    camada: "produto",
    vai: "Um ganho concreto por linha, que vale em qualquer campanha.",
    naoVai: "Frase de venda, promessa sem comprovação ou ganho de uma oferta com prazo.",
    bom: "O paciente não esquece a consulta.",
    bom2: "O notebook chega seco mesmo com chuva.",
    ruim: "O melhor do mercado, sem comparação.",
    porqueRuim: "Promessa sem comprovação e comparação: a marca não pode usar.",
  },
  produtoComoCitar: {
    titulo: "Como citar",
    subtitulo: "Nome certo e o que não dizer",
    camada: "produto",
    vai: "Grafia do nome e regras de menção que valem sempre que o produto aparece.",
    naoVai: "Regras que valem para toda a marca (vão em Do’s e Don’ts).",
    bom: "“AgendaFácil”, tudo junto, com A e F maiúsculos.",
    bom2: "Chamar de “mochila”, nunca de “bolsa”.",
    ruim: "Nunca use gírias.",
    porqueRuim: "Vale para toda a marca, não só para este produto.",
  },
  produtoCondicoes: {
    titulo: "Condições comerciais",
    subtitulo: "Preço e regras que valem em toda campanha",
    camada: "produto",
    vai: "Preço, mensalidade, taxa, cashback, prazo ou gratuidade que valem sempre. Com a opção marcada, o Briefing avisa quando a campanha trouxer outra condição.",
    naoVai: "Oferta de uma campanha só: vai no Overview. Se for uma exceção, registre como condição do preset ao aparecer o aviso.",
    bom: "Mensalidade de R$ 29,90, sem taxa de adesão.",
    bom2: "Garantia de 2 anos contra defeito de fabricação.",
    ruim: "Só neste fim de semana: 20% de desconto.",
    porqueRuim: "É oferta com prazo. Como condição fixa, toda campanha seguinte daria aviso de divergência.",
  },
} satisfies Record<string, GuiaCampo>

export type CampoGuiaId = keyof typeof GUIA_CAMPOS

/** Página do manual no Hub. Cada campo tem âncora com o próprio id (ex.: #overview). */
export const MANUAL_PREENCHIMENTO_URL = "https://saicreativesystem.vercel.app/manual"

/** Endereço do campo no manual do Hub. */
export function linkDoManual(campo: CampoGuiaId): string {
  return `${MANUAL_PREENCHIMENTO_URL}#${campo}`
}

export interface FieldHelpProps {
  campo: CampoGuiaId
  /** Link "Ver no manual". Padrão: o campo no manual do Hub; `false` esconde o link. */
  manualHref?: string | false
  /** Exemplo real da própria marca (ex.: outro produto já validado). Aparece antes dos exemplos neutros. */
  exemploDaMarca?: { texto: string; origem: string }
  className?: string
}

function FieldHelp({ campo, manualHref, exemploDaMarca, className }: FieldHelpProps) {
  const guia: GuiaCampo = GUIA_CAMPOS[campo]
  const href = manualHref === false ? null : manualHref ?? linkDoManual(campo)
  const camada = CAMADAS_CONTEUDO.find((c) => c.id === guia.camada)

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        type="button"
        aria-label={`Como preencher: ${guia.titulo}`}
        className={cn(
          "inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-muted-foreground/50 bg-background text-[11px] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[popup-open]:border-primary data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground",
          className
        )}
      >
        ?
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner side="bottom" align="start" sideOffset={8} className="isolate z-50">
          <PopoverPrimitive.Popup
            data-slot="field-help"
            className="w-[420px] max-w-[calc(100vw-32px)] origin-(--transform-origin) rounded-xl bg-popover p-4 text-popover-foreground shadow-lg ring-1 ring-foreground/10 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <PopoverPrimitive.Title className="text-sm font-semibold">{guia.titulo}</PopoverPrimitive.Title>
                <p className="mt-0.5 text-xs text-muted-foreground">{guia.subtitulo}</p>
              </div>
              <PopoverPrimitive.Close
                aria-label="Fechar"
                className="cursor-pointer rounded p-0.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" aria-hidden="true" />
              </PopoverPrimitive.Close>
            </div>

            <div className="mt-3 flex gap-1" aria-label={`Camada: ${camada?.nome}`}>
              {CAMADAS_CONTEUDO.map((c) => (
                <span
                  key={c.id}
                  className={cn(
                    "flex-1 rounded py-1 text-center text-[11px] font-semibold",
                    c.id === guia.camada ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    // Produto fica ao lado das camadas, não na fila: borda tracejada.
                    c.id === "produto" && c.id !== guia.camada && "border border-dashed border-muted-foreground/40 bg-transparent"
                  )}
                >
                  {c.nome}
                </span>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs leading-relaxed">
              <div>
                <div className="flex items-center gap-1 font-semibold text-teal-700 dark:text-teal-400">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  Vai aqui
                </div>
                <p className="mt-1 text-foreground/80">{guia.vai}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-semibold text-orange-800 dark:text-orange-400">
                  <X className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  Não vai aqui
                </div>
                <p className="mt-1 text-foreground/80">{guia.naoVai}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 text-xs leading-relaxed">
              {exemploDaMarca && (
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-primary">
                    Exemplo da marca · {exemploDaMarca.origem}
                  </div>
                  <p className="whitespace-pre-line">{exemploDaMarca.texto}</p>
                </div>
              )}
              <div className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 dark:border-teal-900 dark:bg-teal-950/40">
                <div className="text-[10px] font-bold uppercase tracking-wide text-teal-800 dark:text-teal-400">
                  {guia.bom2 ? "Bons exemplos" : "Bom exemplo"}
                </div>
                <p>“{guia.bom}”</p>
                {guia.bom2 && <p className="mt-1">“{guia.bom2}”</p>}
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 dark:border-orange-900 dark:bg-orange-950/40">
                <div className="text-[10px] font-bold uppercase tracking-wide text-orange-800 dark:text-orange-400">Confunde a IA</div>
                <p>“{guia.ruim}”</p>
                <p className="mt-1 text-muted-foreground">{guia.porqueRuim}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">Na dúvida: {camada?.pergunta.toLowerCase()}</span>
              {href && (
                // Nova aba: quem está preenchendo não perde o que digitou.
                <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold text-primary hover:underline">
                  Ver no manual →
                </a>
              )}
            </div>
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { FieldHelp }
