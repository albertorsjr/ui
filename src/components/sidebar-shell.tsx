import * as React from "react"

import { cn } from "../utils"

export interface SidebarShellProps {
  children: React.ReactNode
  /** Fixo embaixo, ex.: info do usuário + logout. */
  footer?: React.ReactNode
  className?: string
}

/**
 * Casca da sidebar: largura fixa, cores via tokens `--sidebar*`, conteúdo
 * rolável e footer fixo. Ver ui/SIDEBAR_PATTERN.md para a composição completa
 * (AppSwitcher, SidebarBrandSelector, SidebarNavSection/SidebarNavItem).
 */
export function SidebarShell({ children, footer, className }: SidebarShellProps) {
  return (
    <aside
      className={cn(
        "flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
        className
      )}
    >
      <div className="flex-1 overflow-y-auto">{children}</div>
      {footer && <div className="border-t border-sidebar-border">{footer}</div>}
    </aside>
  )
}
