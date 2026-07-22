import * as React from "react"

import { cn } from "../utils"
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select"

export interface BrandOption {
  id: string
  name: string
}

export interface SidebarBrandSelectorProps {
  brands: BrandOption[]
  selectedBrandId: string | null
  onSelect: (id: string) => void
  loading?: boolean
  /** Slot abaixo da lista de marcas, ex.: brandsystem usa "+ Nova marca" (admin-only). */
  footer?: React.ReactNode
  /** Slot por item, ex.: botão de excluir marca (admin-only). Renderizado dentro do
   *  item selecionável — se o conteúdo tiver seu próprio onClick, chame
   *  `event.stopPropagation()` nele para não disparar a seleção da marca junto. */
  renderBrandExtra?: (brand: BrandOption) => React.ReactNode
  className?: string
}

/**
 * Seletor de marca/perfil da sidebar. Visual replicado exatamente do que já
 * existia em imagesystem/(dashboard)/layout.tsx (~linhas 244-263) — ver
 * ui/SIDEBAR_PATTERN.md para a composição completa de sidebar.
 */
export function SidebarBrandSelector({
  brands,
  selectedBrandId,
  onSelect,
  loading,
  footer,
  renderBrandExtra,
  className,
}: SidebarBrandSelectorProps) {
  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId)

  return (
    <Select
      value={selectedBrandId ?? ""}
      onValueChange={(value) => onSelect(value as string)}
    >
      <SelectTrigger className={cn("!h-auto w-full gap-3 !px-3 !py-2.5", className)}>
        <div className="size-9 shrink-0 rounded-md bg-muted" />
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <span className="text-xs text-muted-foreground">Perfil</span>
          <span className="w-full truncate text-left text-base font-semibold text-foreground">
            {loading ? "Carregando…" : (selectedBrand?.name ?? "Selecione uma marca")}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            <span className="flex w-full flex-1 items-center justify-between gap-2">
              <span className="truncate">{brand.name}</span>
              {renderBrandExtra?.(brand)}
            </span>
          </SelectItem>
        ))}
        {footer}
      </SelectContent>
    </Select>
  )
}
