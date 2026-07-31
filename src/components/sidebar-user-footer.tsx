"use client"

import * as React from "react"
import { LogOut } from "lucide-react"

import { cn } from "../utils"
import { ThemeToggle } from "./theme-toggle"

export interface SidebarUserFooterProps {
  /** E-mail do usuário logado. Quando ausente/vazio, só o avatar some (toggle de tema e "Sair" continuam). */
  email?: string | null
  /** Papel do usuário (ex.: "admin"), exibido abaixo do e-mail. Omita em apps single-role (ex.: briefingsystem). */
  role?: string | null
  onLogout: () => void
  className?: string
}

/**
 * Rodapé padrão da sidebar (prop `footer` de `SidebarShell`) — avatar com
 * iniciais do e-mail, e-mail, papel opcional, toggle de tema, e "Sair". Ver
 * ui/SIDEBAR_PATTERN.md. O `ThemeToggle` só funciona se o app tiver
 * `<ThemeProvider>` montado acima na árvore (theme-provider.tsx).
 */
export function SidebarUserFooter({ email, role, onLogout, className }: SidebarUserFooterProps) {
  const initials = email ? email.slice(0, 2).toUpperCase() : "??"

  return (
    <div className={cn("flex flex-col gap-1 px-2 py-2", className)}>
      <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
        {email ? (
          <>
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sidebar-primary/15 text-xs font-semibold text-sidebar-primary">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-sidebar-foreground">{email}</p>
              {role && <p className="text-xs capitalize text-muted-foreground">{role}</p>}
            </div>
          </>
        ) : (
          <div className="flex-1" />
        )}
        <ThemeToggle />
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:outline-none"
      >
        <LogOut className="size-4 shrink-0" />
        <span>Sair</span>
      </button>
    </div>
  )
}
