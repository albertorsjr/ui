import * as React from "react"

import { cn } from "../utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export interface BrandOption {
  id: string
  name: string
  /** Pictograma da marca — exibido no quadrado 36x36 (size-9) do trigger e de cada item. */
  logoUrl?: string | null
}

export interface SidebarBrandSelectorProps {
  brands: BrandOption[]
  selectedBrandId: string | null
  onSelect: (id: string) => void
  loading?: boolean
  /** Slot abaixo da lista de marcas, ex.: brandsystem usa "+ Nova marca" (admin-only). */
  footer?: React.ReactNode
  /** Slot por item, ex.: botão de excluir marca (admin-only). Renderizado como irmão
   *  interativo do item (não mais aninhado dentro de um option de <select>) — se o
   *  conteúdo tiver seu próprio onClick, chame `event.stopPropagation()` nele para não
   *  disparar a seleção da marca junto. */
  renderBrandExtra?: (brand: BrandOption) => React.ReactNode
  className?: string
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BrandThumb({ logoUrl }: { logoUrl?: string | null }) {
  return (
    <div className="size-9 shrink-0 overflow-hidden rounded-md bg-muted">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt="" className="size-full object-cover" />
      ) : null}
    </div>
  )
}

/**
 * Seletor de marca/perfil da sidebar. Segue o mesmo padrão de popover (não
 * mais um <select> nativo via @base-ui/react/select) do AppSwitcher — abre
 * ABAIXO do trigger em vez de sobrepor a marca selecionada, e cada item é um
 * <div> comum em vez de um option de listbox, o que permite conteúdo
 * interativo aninhado (ex.: o botão de excluir de renderBrandExtra) sem
 * ficar escondido/quebrado pelas regras de acessibilidade de <select>.
 * Tamanho do quadrado do pictograma (size-9) mantido igual ao ícone de
 * sistema do AppSwitcher, pra consistência visual entre os dois seletores.
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
  const [open, setOpen] = React.useState(false)
  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId)

  function handleSelect(id: string) {
    onSelect(id)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-sidebar-accent/50",
          className
        )}
      >
        <BrandThumb logoUrl={selectedBrand?.logoUrl} />
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <span className="text-xs text-muted-foreground">Perfil</span>
          <span className="w-full truncate text-left text-base font-semibold text-foreground">
            {loading ? "Carregando…" : (selectedBrand?.name ?? "Selecione uma marca")}
          </span>
        </div>
        <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent>
        {brands.map((brand) => {
          const isSelected = brand.id === selectedBrandId
          return (
            <div
              key={brand.id}
              role="option"
              aria-selected={isSelected}
              onClick={() => handleSelect(brand.id)}
              className="group flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent"
            >
              <BrandThumb logoUrl={brand.logoUrl} />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                {brand.name}
              </span>
              {renderBrandExtra?.(brand)}
              {isSelected && <CheckIcon className="size-4 shrink-0 text-primary" />}
            </div>
          )
        })}
        {footer}
      </PopoverContent>
    </Popover>
  )
}
