"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

// Reexportado junto com o Toaster (não só o componente) — apps consumidores
// via `file:../ui` symlink têm seu próprio node_modules/sonner separado do
// de `ui`, então `import { toast } from "sonner"` no app resolve pra uma
// instância DIFERENTE do módulo sonner da que o <Toaster/> daqui escuta.
// toast()/toast.error() etc. viram no-ops silenciosos (sem erro, sem toast
// visível) porque o "store" interno do sonner é um singleton por instância
// de módulo. Import de `toast` (e do Toaster) sempre a partir daqui garante
// a mesma instância nos dois lados. Achado/corrigido 2026-07-29 no
// imagesystem — ver CLAUDE.md dele.
export { Toaster, toast }
