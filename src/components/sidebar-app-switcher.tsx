import * as React from "react"

import { cn } from "../utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

/** Linha do catálogo compartilhado `systems` (RLS já filtra pelo que o usuário logado pode acessar). */
export interface SystemEntry {
  key: string
  label: string
  url: string | null
  /**
   * `true` = sistema fora do ecossistema Next.js (ex.: Content System, webhook
   * n8n) — não tem rota `/bridge` própria pra receber a ponte de sessão.
   * Ausente/`false` = sistema interno, suporta a ponte normalmente. Quem
   * implementa `onSystemNavigate` decide o que fazer com essa flag (o
   * `AppSwitcher` em si só repassa o campo, não tem lógica de navegação).
   */
  external?: boolean
}

export interface AppSwitcherProps {
  /** Nome do app atual, ex.: "Brand System", "Image System". */
  appName: string
  /** Catálogo de apps já filtrado por quem chama (RLS). */
  systems: SystemEntry[]
  /** Ícone por `system.key`. Chave desconhecida cai no ícone genérico (grid). */
  systemIcons?: Record<string, React.ReactNode>
  loading?: boolean
  className?: string
  /**
   * Callback opcional pra interceptar o clique num sistema do switcher.
   * Quem implementa é responsável por chamar `event.preventDefault()` se
   * quiser cancelar a navegação padrão do `<a>` — sem isso, o link segue
   * navegando normalmente pro `system.url` além de rodar o callback.
   */
  onSystemNavigate?: (system: SystemEntry, event: React.MouseEvent<HTMLAnchorElement>) => void
}

/**
 * Ícone de grid 2x2 genérico, inline (sem depender de lucide-react aqui) —
 * fallback pra qualquer `system.key` que o app consumidor não tenha mapeado.
 */
function DefaultSystemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Cabeçalho de sidebar com nome do app + troca entre sistemas do ecossistema
 * Sai Creative System. Padrão oficial extraído do imagesystem
 * ((dashboard)/layout.tsx) — ver ui/SIDEBAR_PATTERN.md.
 */
export function AppSwitcher({
  appName,
  systems,
  systemIcons,
  loading,
  className,
  onSystemNavigate,
}: AppSwitcherProps) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left transition-colors hover:bg-sidebar-accent/50",
          className
        )}
      >
        <div>
          <p className="text-xl font-semibold text-foreground">{appName}</p>
          <p className="text-sm text-primary">by Sai Creative</p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent>
        <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Sistemas Sai Creative</p>
        {loading ? (
          <p className="px-2 py-1.5 text-sm text-muted-foreground">Carregando…</p>
        ) : (
          systems.map((system) => {
            const icon = systemIcons?.[system.key] ?? <DefaultSystemIcon />
            const itemContent = (
              <>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  {icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{system.label}</span>
                  {!system.url && (
                    <span className="text-xs text-muted-foreground">Em breve</span>
                  )}
                </span>
              </>
            )

            // Sistema ainda sem app deployado (`url` null): mostra desabilitado
            // em vez de link, sem quebrar o layout do item.
            if (!system.url) {
              return (
                <div
                  key={system.key}
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center gap-3 rounded-md px-2 py-2 opacity-50"
                >
                  {itemContent}
                </div>
              )
            }

            return (
              <a
                key={system.key}
                href={system.url}
                // A navegação padrão do `<a>` só é cancelada se o handler
                // passado em `onSystemNavigate` chamar `event.preventDefault()`.
                onClick={onSystemNavigate ? (event) => onSystemNavigate(system, event) : undefined}
                className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent"
              >
                {itemContent}
              </a>
            )
          })
        )}
      </PopoverContent>
    </Popover>
  )
}
