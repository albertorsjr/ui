"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

/**
 * Fina camada sobre `next-themes` com os defaults do ecossistema já
 * aplicados: `attribute="class"` (bate com `.dark` em `styles.css`),
 * `defaultTheme="dark"` (identidade visual atual, preservada até o usuário
 * trocar manualmente) e `enableSystem={false}` (troca é sempre explícita via
 * `ThemeToggle`, não segue o SO). Qualquer prop pode ser sobrescrita pelo app
 * consumidor.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} {...props}>
      {children}
    </NextThemesProvider>
  )
}
