"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "./button"

export interface ThemeToggleProps {
  className?: string
}

/**
 * Botão de alternar tema (ícone sol/lua). Depende de `<ThemeProvider>` estar
 * montado acima na árvore (theme-provider.tsx) — sem ele, `useTheme()` não
 * tem contexto e o clique não faz nada.
 *
 * `mounted` evita mismatch de hidratação: `resolvedTheme` só existe depois
 * do next-themes ler `localStorage` no client, então o ícone real só é
 * renderizado após o primeiro efeito — no SSR/primeira pintura, um botão
 * neutro (desabilitado) ocupa o lugar.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Alternar tema"
        disabled
        className={className}
      >
        <Sun className="size-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
