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

export { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Skeleton, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, badgeVariants, buttonVariants, cn, tabsListVariants };
