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
 * para qualquer marca.
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
    naoVai: "Argumento de produto, regra de campanha ou vocabulário (vai no Tom).",
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
    naoVai: "Oferta, produto ou meta de campanha (vai no Objetivo).",
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
    bom: "Primeiro uso: o cliente tem o recurso e nunca usou. A peça mostra a primeira situação em que vale usar.",
    ruim: "Primeiro uso: fale com o gestor, sem “pra você”.",
    porqueRuim: "É tratamento de um público. Aqui, chega em todos os públicos que usam o preset.",
  },
  argumento: {
    titulo: "Argumento",
    subtitulo: "A linha de raciocínio neste momento",
    camada: "momento",
    vai: "Como a peça convence neste momento, de um jeito que sirva para qualquer produto.",
    naoVai: "Dados de um produto específico (vão no Overview da campanha).",
    bom: "Mostrar o benefício numa situação concreta da rotina.",
    ruim: "Falar do cashback de 1% do conversor.",
    porqueRuim: "É dado de um produto. Na próxima campanha, a IA repete o cashback.",
  },
  condicoes: {
    titulo: "Condições exclusivas",
    subtitulo: "Exceções que valem só aqui",
    camada: "momento",
    vai: "Uma exceção que vale só para as campanhas deste preset.",
    naoVai: "Regra permanente de um público (vai no Tom) ou da marca (vai em Do’s e Don’ts).",
    bom: "Não citar a taxa promocional: ainda não foi aprovada.",
    ruim: "Para empresas maiores, evite “pra você”.",
    porqueRuim: "É regra de um público. Aqui, atinge todo público que usa o preset.",
  },
  overview: {
    titulo: "Overview",
    subtitulo: "O que há de novo nesta campanha",
    camada: "campanha",
    vai: "O produto ou fato da campanha, para quem está disponível, condições e mecânica.",
    naoVai: "Quem é o público (vem do Brand System) e o momento, como Primeiro uso (vem do preset).",
    bom: "Conversor de moedas na maquininha: sem custo, disponível para quem tem o modelo X; 1% de cashback nas transações elegíveis.",
    ruim: "Público de empresas maiores, em primeiro uso, que precisa ser incentivado.",
    porqueRuim: "Repete o Perfil e o Contexto: a IA dá peso dobrado.",
  },
  objetivo: {
    titulo: "Objetivo",
    subtitulo: "A mudança que a campanha quer causar",
    camada: "campanha",
    vai: "O que deve mudar no comportamento do cliente e como saber se deu certo, em uma ou duas frases.",
    naoVai: "A descrição do produto (já está no Overview).",
    bom: "Fazer o cliente usar o conversor pela primeira vez em 30 dias. Medida: primeira transação.",
    ruim: "Apresentar o conversor de moedas e suas vantagens.",
    porqueRuim: "Descreve o conteúdo, não a mudança que se espera.",
  },
  foco: {
    titulo: "Foco da comunicação",
    subtitulo: "O que só esta peça tem",
    camada: "peca",
    vai: "A ideia e o ângulo, a situação da rotina escolhida e a frase que precisa sair igual (marcada como obrigatória).",
    naoVai: "Quem é o público, o momento (Contexto, Argumento) e o vocabulário dele: já chegam sozinhos.",
    bom: "Situação: evento na cidade. Título obrigatório: “Chegou um cliente de fora?”",
    ruim: "Empresas maiores, evite “pra você”. É o primeiro uso, então incentive a usar.",
    porqueRuim: "Repete o Tom do público e o Contexto do preset: a IA dá peso dobrado.",
  },
  produtoResumo: {
    titulo: "O que é",
    subtitulo: "O produto em uma ou duas frases",
    camada: "produto",
    vai: "O que é e que problema resolve. É a linha que a IA usa quando o catálogo é grande.",
    naoVai: "Preço, taxa ou prazo (vão no Overview). Frase de venda ou chamada para ação (vai no Foco).",
    bom: "Recurso da maquininha que deixa o cliente estrangeiro pagar na moeda dele, enquanto o lojista recebe em reais.",
    ruim: "A solução perfeita para turbinar o seu negócio!",
    porqueRuim: "Não diz o que o produto é, e a IA leva o tom de venda para todas as peças.",
  },
  produtoComoFunciona: {
    titulo: "Como funciona",
    subtitulo: "Recursos e funcionamento",
    camada: "produto",
    vai: "Um recurso ou fato por linha: o que faz, como faz, o que aceita.",
    naoVai: "Benefício para o cliente (vai em Benefícios). Passo a passo (vai em Como usar).",
    bom: "Identifica o cartão estrangeiro e oferece pagar na moeda de origem.",
    ruim: "Mais agilidade e praticidade no seu dia a dia.",
    porqueRuim: "É benefício genérico, não funcionamento. Não ajuda a IA a explicar o produto.",
  },
  produtoParaQuem: {
    titulo: "Para quem e requisitos",
    subtitulo: "Quem pode usar e o que precisa ter",
    camada: "produto",
    vai: "Quem pode usar, equipamento ou conta necessária, bandeiras e modalidades, quem mais usa.",
    naoVai: "Preço, taxa, cashback, isenção e prazo: mudam por ação e vão no Overview da campanha.",
    bom: "Cartões Visa e Mastercard, no débito e no crédito à vista.",
    ruim: "Cashback de 1% pago no 2º dia útil.",
    porqueRuim: "Se a condição muda, todas as campanhas seguintes levam o número velho.",
  },
  produtoComoUsar: {
    titulo: "Como usar",
    subtitulo: "O passo a passo para começar",
    camada: "produto",
    vai: "Um passo por linha, na ordem. Não precisa numerar: o sistema numera.",
    naoVai: "Passos de uma ação específica, como participar de uma promoção (vão no Overview).",
    bom: "Inicie a venda normalmente e informe o valor.",
    ruim: "Baixe agora o app e aproveite!",
    porqueRuim: "É chamada para ação, não um passo. O CTA de cada peça vem do briefing.",
  },
  produtoBeneficios: {
    titulo: "Benefícios",
    subtitulo: "O que o cliente ganha, como fato",
    camada: "produto",
    vai: "Um ganho concreto por linha, que vale em qualquer campanha.",
    naoVai: "Frase de venda, promessa sem comprovação ou ganho de uma oferta com prazo.",
    bom: "O cliente vê o valor na moeda que conhece antes de pagar.",
    ruim: "Venda muito mais com o melhor conversor do mercado.",
    porqueRuim: "Promessa sem comprovação e comparação: a marca não pode usar.",
  },
  produtoComoCitar: {
    titulo: "Como citar",
    subtitulo: "Nome certo e o que não dizer",
    camada: "produto",
    vai: "Grafia do nome e regras de menção que valem sempre que o produto aparece.",
    naoVai: "Regras que valem para toda a marca (vão em Do’s e Don’ts).",
    bom: "Pix é modalidade de pagamento, não produto da marca.",
    ruim: "Nunca use gírias.",
    porqueRuim: "Vale para toda a marca, não só para este produto.",
  },
} satisfies Record<string, GuiaCampo>

export type CampoGuiaId = keyof typeof GUIA_CAMPOS

export interface FieldHelpProps {
  campo: CampoGuiaId
  /** Link "Ver no manual". Sem ele, o link não aparece. */
  manualHref?: string
  className?: string
}

function FieldHelp({ campo, manualHref, className }: FieldHelpProps) {
  const guia: GuiaCampo = GUIA_CAMPOS[campo]
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
              <div className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 dark:border-teal-900 dark:bg-teal-950/40">
                <div className="text-[10px] font-bold uppercase tracking-wide text-teal-800 dark:text-teal-400">Bom exemplo</div>
                <p>“{guia.bom}”</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 dark:border-orange-900 dark:bg-orange-950/40">
                <div className="text-[10px] font-bold uppercase tracking-wide text-orange-800 dark:text-orange-400">Confunde a IA</div>
                <p>“{guia.ruim}”</p>
                <p className="mt-1 text-muted-foreground">{guia.porqueRuim}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">Na dúvida: {camada?.pergunta.toLowerCase()}</span>
              {manualHref && (
                <a href={manualHref} className="shrink-0 font-semibold text-primary hover:underline">
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
