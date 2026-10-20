import * as React from "react"

import { cn } from "../utils"

export interface SidebarNavItemProps {
  href: string
  label: string
  /** Ícone já renderizado — o pacote não importa lib de ícone aqui; cada app
   *  passa o seu (lucide-react, SVG inline etc.). */
  icon: React.ReactNode
  active: boolean
  disabled?: boolean
  /** Ex.: checkmark verde de "validado". Opcional, renderizado à direita do label. */
  statusIndicator?: React.ReactNode
  /** Ex.: fechar menu mobile ao navegar. Opcional. Recebe o evento do clique,
   *  então `event.preventDefault()` cancela a navegação (vale também com
   *  `linkComponent`, porque o `next/link` respeita `defaultPrevented`). */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  /** Componente de link do app (ex.: `next/link`) para navegação client-side,
   *  sem recarregar a página inteira. Sem ele, cai no `<a>` simples. Item
   *  `disabled` sempre usa `<a>` sem href, porque não há para onde navegar. */
  linkComponent?: SidebarLinkComponent
  className?: string
}

/** Forma mínima que o `linkComponent` precisa aceitar — o `next/link` cabe. */
export type SidebarLinkComponent = React.ComponentType<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>

/**
 * Item de navegação da sidebar. O pacote não depende de Next.js: por padrão
 * usa `<a>` simples (recarrega a página inteira a cada clique); o app passa
 * `linkComponent` (ex.: `next/link`) para navegar client-side. Estado ativo
 * usa só tokens semânticos, nunca cores hardcoded.
 */
export function SidebarNavItem({
  href,
  label,
  icon,
  active,
  disabled,
  statusIndicator,
  onClick,
  linkComponent,
  className,
}: SidebarNavItemProps) {
  const Comp: React.ElementType = !disabled && linkComponent ? linkComponent : "a"
  return (
    <Comp
      href={disabled ? undefined : href}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      )}
    >
      <span className="flex size-4 shrink-0 items-center justify-center [&_svg]:size-4">
        {icon}
      </span>
      <span className="flex-1 truncate">{label}</span>
      {statusIndicator}
    </Comp>
  )
}

export interface SidebarNavSectionProps {
  /** Eyebrow tipo "BIBLIOTECA". Opcional. */
  label?: string
  children: React.ReactNode
  className?: string
}

/** Agrupa `SidebarNavItem`s sob um rótulo opcional (seção da sidebar). */
export function SidebarNavSection({ label, children, className }: SidebarNavSectionProps) {
  return (
    <div className={cn("flex flex-col gap-1 px-4 py-4", className)}>
      {label && (
        <p className="px-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
      )}
      <nav className="flex flex-col gap-1">{children}</nav>
    </div>
  )
}
