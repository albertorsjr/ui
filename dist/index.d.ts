import * as React$1 from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { useRender } from '@base-ui/react/use-render';
import { VariantProps } from 'class-variance-authority';
import { Button as Button$1 } from '@base-ui/react/button';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { Select as Select$1 } from '@base-ui/react/select';
import { Separator as Separator$1 } from '@base-ui/react/separator';
import { ToasterProps } from 'sonner';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';
import { ClassValue } from 'clsx';

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, render, ...props }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>;

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, isLoading, disabled, children, ...props }: Button$1.Props & VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
}): React$1.JSX.Element;

declare function Card({ className, size, ...props }: React$1.ComponentProps<"div"> & {
    size?: "default" | "sm";
}): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Dialog({ ...props }: Dialog$1.Root.Props): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: Dialog$1.Trigger.Props): React$1.JSX.Element;
declare function DialogPortal({ ...props }: Dialog$1.Portal.Props): React$1.JSX.Element;
declare function DialogClose({ ...props }: Dialog$1.Close.Props): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: Dialog$1.Backdrop.Props): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: Dialog$1.Popup.Props & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React$1.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: Dialog$1.Title.Props): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: Dialog$1.Description.Props): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<"label">): React$1.JSX.Element;

declare function Popover({ ...props }: Popover$1.Root.Props): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: Popover$1.Trigger.Props): React$1.JSX.Element;
declare function PopoverContent({ className, side, sideOffset, align, alignOffset, ...props }: Popover$1.Popup.Props & Pick<Popover$1.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">): React$1.JSX.Element;

declare const Select: typeof Select$1.Root;
declare function SelectGroup({ className, ...props }: Select$1.Group.Props): React$1.JSX.Element;
declare function SelectValue({ className, ...props }: Select$1.Value.Props): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: Select$1.Trigger.Props & {
    size?: "sm" | "default";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, side, sideOffset, align, alignOffset, alignItemWithTrigger, ...props }: Select$1.Popup.Props & Pick<Select$1.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger">): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: Select$1.GroupLabel.Props): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: Select$1.Item.Props): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: Select$1.Separator.Props): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollUpArrow>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollDownArrow>): React$1.JSX.Element;

declare function Separator({ className, orientation, ...props }: Separator$1.Props): React$1.JSX.Element;

/** Linha do catálogo compartilhado `systems` (RLS já filtra pelo que o usuário logado pode acessar). */
interface SystemEntry {
    key: string;
    label: string;
    url: string | null;
}
interface AppSwitcherProps {
    /** Nome do app atual, ex.: "Brand System", "Image System". */
    appName: string;
    /** Catálogo de apps já filtrado por quem chama (RLS). */
    systems: SystemEntry[];
    /** Ícone por `system.key`. Chave desconhecida cai no ícone genérico (grid). */
    systemIcons?: Record<string, React$1.ReactNode>;
    loading?: boolean;
    className?: string;
}
/**
 * Cabeçalho de sidebar com nome do app + troca entre sistemas do ecossistema
 * Sai Creative System. Padrão oficial extraído do imagesystem
 * ((dashboard)/layout.tsx) — ver ui/SIDEBAR_PATTERN.md.
 */
declare function AppSwitcher({ appName, systems, systemIcons, loading, className, }: AppSwitcherProps): React$1.JSX.Element;

interface BrandOption {
    id: string;
    name: string;
}
interface SidebarBrandSelectorProps {
    brands: BrandOption[];
    selectedBrandId: string | null;
    onSelect: (id: string) => void;
    loading?: boolean;
    /** Slot abaixo da lista de marcas, ex.: brandsystem usa "+ Nova marca" (admin-only). */
    footer?: React$1.ReactNode;
    /** Slot por item, ex.: botão de excluir marca (admin-only). Renderizado dentro do
     *  item selecionável — se o conteúdo tiver seu próprio onClick, chame
     *  `event.stopPropagation()` nele para não disparar a seleção da marca junto. */
    renderBrandExtra?: (brand: BrandOption) => React$1.ReactNode;
    className?: string;
}
/**
 * Seletor de marca/perfil da sidebar. Visual replicado exatamente do que já
 * existia em imagesystem/(dashboard)/layout.tsx (~linhas 244-263) — ver
 * ui/SIDEBAR_PATTERN.md para a composição completa de sidebar.
 */
declare function SidebarBrandSelector({ brands, selectedBrandId, onSelect, loading, footer, renderBrandExtra, className, }: SidebarBrandSelectorProps): React$1.JSX.Element;

interface SidebarNavItemProps {
    href: string;
    label: string;
    /** Ícone já renderizado — o pacote não importa lib de ícone aqui; cada app
     *  passa o seu (lucide-react, SVG inline etc.). */
    icon: React$1.ReactNode;
    active: boolean;
    disabled?: boolean;
    /** Ex.: checkmark verde de "validado". Opcional, renderizado à direita do label. */
    statusIndicator?: React$1.ReactNode;
    /** Ex.: fechar menu mobile ao navegar. Opcional. */
    onClick?: () => void;
    className?: string;
}
/**
 * Item de navegação da sidebar. Usa `<a>` simples — o pacote não depende de
 * Next.js; se o app consumidor quiser client-side routing (next/link), ele
 * troca por seu próprio wrapper (essa é uma limitação documentada, ver
 * ui/SIDEBAR_PATTERN.md). Estado ativo usa só tokens semânticos, nunca cores
 * hardcoded.
 */
declare function SidebarNavItem({ href, label, icon, active, disabled, statusIndicator, onClick, className, }: SidebarNavItemProps): React$1.JSX.Element;
interface SidebarNavSectionProps {
    /** Eyebrow tipo "BIBLIOTECA". Opcional. */
    label?: string;
    children: React$1.ReactNode;
    className?: string;
}
/** Agrupa `SidebarNavItem`s sob um rótulo opcional (seção da sidebar). */
declare function SidebarNavSection({ label, children, className }: SidebarNavSectionProps): React$1.JSX.Element;

interface SidebarShellProps {
    children: React$1.ReactNode;
    /** Fixo embaixo, ex.: info do usuário + logout. */
    footer?: React$1.ReactNode;
    className?: string;
}
/**
 * Casca da sidebar: largura fixa, cores via tokens `--sidebar*`, conteúdo
 * rolável e footer fixo. Ver ui/SIDEBAR_PATTERN.md para a composição completa
 * (AppSwitcher, SidebarBrandSelector, SidebarNavSection/SidebarNavItem).
 */
declare function SidebarShell({ children, footer, className }: SidebarShellProps): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

declare function Tabs({ className, orientation, ...props }: Tabs$1.Root.Props): React$1.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: Tabs$1.List.Props & VariantProps<typeof tabsListVariants>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: Tabs$1.Tab.Props): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: Tabs$1.Panel.Props): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { AppSwitcher, type AppSwitcherProps, Badge, type BrandOption, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, SidebarBrandSelector, type SidebarBrandSelectorProps, SidebarNavItem, type SidebarNavItemProps, SidebarNavSection, type SidebarNavSectionProps, SidebarShell, type SidebarShellProps, Skeleton, type SystemEntry, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, badgeVariants, buttonVariants, cn, tabsListVariants };
