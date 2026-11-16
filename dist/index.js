"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppSwitcher: () => AppSwitcher,
  Badge: () => Badge,
  Button: () => Button,
  CAMADAS_CONTEUDO: () => CAMADAS_CONTEUDO,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  FieldHelp: () => FieldHelp,
  GUIA_CAMPOS: () => GUIA_CAMPOS,
  Input: () => Input,
  Label: () => Label,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  SidebarBrandSelector: () => SidebarBrandSelector,
  SidebarNavItem: () => SidebarNavItem,
  SidebarNavSection: () => SidebarNavSection,
  SidebarShell: () => SidebarShell,
  SidebarUserFooter: () => SidebarUserFooter,
  Skeleton: () => Skeleton,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea,
  ThemeProvider: () => ThemeProvider,
  ThemeToggle: () => ThemeToggle,
  Toaster: () => Toaster,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  tabsListVariants: () => tabsListVariants,
  toast: () => import_sonner.toast
});
module.exports = __toCommonJS(index_exports);

// src/components/badge.tsx
var import_merge_props = require("@base-ui/react/merge-props");
var import_use_render = require("@base-ui/react/use-render");
var import_class_variance_authority = require("class-variance-authority");

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/badge.tsx
var badgeVariants = (0, import_class_variance_authority.cva)(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return (0, import_use_render.useRender)({
    defaultTagName: "span",
    props: (0, import_merge_props.mergeProps)(
      {
        className: cn(badgeVariants({ variant }), className)
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant
    }
  });
}

// src/components/button.tsx
var import_button = require("@base-ui/react/button");
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm leading-none font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  isLoading,
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_button.Button,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      disabled: disabled || isLoading,
      ...props,
      children: [
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: "animate-spin" }),
        children
      ]
    }
  );
}

// src/components/card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      ),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-(--card-spacing)", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}

// src/components/checkbox.tsx
var import_checkbox = require("@base-ui/react/checkbox");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_checkbox.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer flex size-4 shrink-0 items-center justify-center rounded-[min(var(--radius-md),6px)] border border-input bg-transparent outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_checkbox.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.CheckIcon, { className: "size-3", strokeWidth: 3 })
        }
      )
    }
  );
}

// src/components/dialog.tsx
var import_dialog = require("@base-ui/react/dialog");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Dialog({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dialog.Dialog.Backdrop,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_dialog.Dialog.Popup,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            import_dialog.Dialog.Close,
            {
              "data-slot": "dialog-close",
              render: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                Button,
                {
                  variant: "ghost",
                  className: "absolute top-2 right-2",
                  size: "icon-sm"
                }
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_lucide_react3.XIcon,
                  {}
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Close, { render: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { variant: "outline" }), children: "Close" })
      ]
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dialog.Dialog.Title,
    {
      "data-slot": "dialog-title",
      className: cn(
        "font-heading text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dialog.Dialog.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/field-help.tsx
var import_popover = require("@base-ui/react/popover");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var CAMADAS_CONTEUDO = [
  { id: "marca", nome: "Marca", pergunta: "A frase vale para qualquer p\xFAblico e qualquer campanha?" },
  { id: "publico", nome: "P\xFAblico", pergunta: "A frase vale para qualquer campanha deste p\xFAblico?" },
  { id: "momento", nome: "Momento", pergunta: "A frase vale para qualquer produto e qualquer p\xFAblico?" },
  { id: "campanha", nome: "Campanha", pergunta: "A frase vale para todas as pe\xE7as desta campanha?" },
  { id: "peca", nome: "Pe\xE7a", pergunta: "A frase vale s\xF3 para esta pe\xE7a?" },
  { id: "produto", nome: "Produto", pergunta: "A frase vale em qualquer campanha, p\xFAblico e momento deste produto?" }
];
var GUIA_CAMPOS = {
  dosDonts: {
    titulo: "Do\u2019s e Don\u2019ts",
    subtitulo: "Regras que valem para toda a marca",
    camada: "marca",
    vai: "O que vale para qualquer pe\xE7a, qualquer p\xFAblico e qualquer campanha.",
    naoVai: "Tratamento de um p\xFAblico (vai no Tom dele) ou regra de uma campanha s\xF3.",
    bom: "N\xE3o prometer resultado sem comprova\xE7\xE3o.",
    ruim: "Fale com o gestor, n\xE3o com o dono.",
    porqueRuim: "Vale para um p\xFAblico s\xF3. Aqui, chega em todos."
  },
  perfil: {
    titulo: "Perfil",
    subtitulo: "Quem \xE9 este p\xFAblico",
    camada: "publico",
    vai: "Fatos sobre o neg\xF3cio, quem l\xEA a mensagem e situa\xE7\xF5es reais da rotina. Num p\xFAblico geral, s\xF3 situa\xE7\xF5es que valem para todo ramo.",
    naoVai: "Argumento de produto, regra de campanha ou vocabul\xE1rio (vai no Tom).",
    bom: "Lojas de bairro com at\xE9 3 funcion\xE1rios; o dono atende no balc\xE3o. Rotina: movimento forte no fim de semana, fechamento do caixa \xE0 noite.",
    ruim: "Mostre que o novo app resolve o fechamento do caixa.",
    porqueRuim: "\xC9 argumento de uma campanha. Quando ela acabar, o p\xFAblico continua dizendo isso."
  },
  tom: {
    titulo: "Tom",
    subtitulo: "Como falar com este p\xFAblico",
    camada: "publico",
    vai: "Registro, tratamento (voc\xEA ou o neg\xF3cio) e palavras pr\xF3prias deste p\xFAblico.",
    naoVai: "Frase pronta de campanha (vai no Foco). Proibi\xE7\xE3o de toda a marca (vai em Do\u2019s e Don\u2019ts).",
    bom: "Consultivo e direto. Fale com o neg\xF3cio, n\xE3o com a pessoa: \u201Cpara a sua empresa\u201D, n\xE3o \u201Cpra voc\xEA\u201D.",
    ruim: "Use: \u201CSeu caixa pode fazer mais por voc\xEA\u201D.",
    porqueRuim: "\xC9 frase de uma campanha: a IA repete em todas as pe\xE7as deste p\xFAblico."
  },
  gatilho: {
    titulo: "Gatilho principal",
    subtitulo: "O que este p\xFAblico quer resolver",
    camada: "publico",
    vai: "A vontade ou o problema do p\xFAblico, em uma ou duas frases. Vale para qualquer campanha.",
    naoVai: "Oferta, produto ou meta de campanha (vai no Objetivo).",
    bom: "Gastar menos tempo com o caixa e mais com o cliente.",
    ruim: "Ativar o cashback de novembro.",
    porqueRuim: "\xC9 a meta de uma campanha, n\xE3o o que o p\xFAblico quer."
  },
  contexto: {
    titulo: "Contexto",
    subtitulo: "O momento da rela\xE7\xE3o com o produto",
    camada: "momento",
    vai: "Em que momento o cliente est\xE1 (nunca usou, usa pouco, vai cancelar) e o que a pe\xE7a faz nele. Vale para qualquer produto e qualquer p\xFAblico.",
    naoVai: "Tom ou vocabul\xE1rio de um p\xFAblico (vai no Brand System).",
    bom: "Primeiro uso: o cliente tem o recurso e nunca usou. A pe\xE7a mostra a primeira situa\xE7\xE3o em que vale usar.",
    ruim: "Primeiro uso: fale com o gestor, sem \u201Cpra voc\xEA\u201D.",
    porqueRuim: "\xC9 tratamento de um p\xFAblico. Aqui, chega em todos os p\xFAblicos que usam o preset."
  },
  argumento: {
    titulo: "Argumento",
    subtitulo: "A linha de racioc\xEDnio neste momento",
    camada: "momento",
    vai: "Como a pe\xE7a convence neste momento, de um jeito que sirva para qualquer produto.",
    naoVai: "Dados de um produto espec\xEDfico (v\xE3o no Overview da campanha).",
    bom: "Mostrar o benef\xEDcio numa situa\xE7\xE3o concreta da rotina.",
    ruim: "Falar do cashback de 1% do conversor.",
    porqueRuim: "\xC9 dado de um produto. Na pr\xF3xima campanha, a IA repete o cashback."
  },
  condicoes: {
    titulo: "Condi\xE7\xF5es exclusivas",
    subtitulo: "Exce\xE7\xF5es que valem s\xF3 aqui",
    camada: "momento",
    vai: "Uma exce\xE7\xE3o que vale s\xF3 para as campanhas deste preset.",
    naoVai: "Regra permanente de um p\xFAblico (vai no Tom) ou da marca (vai em Do\u2019s e Don\u2019ts).",
    bom: "N\xE3o citar a taxa promocional: ainda n\xE3o foi aprovada.",
    ruim: "Para empresas maiores, evite \u201Cpra voc\xEA\u201D.",
    porqueRuim: "\xC9 regra de um p\xFAblico. Aqui, atinge todo p\xFAblico que usa o preset."
  },
  overview: {
    titulo: "Overview",
    subtitulo: "O que h\xE1 de novo nesta campanha",
    camada: "campanha",
    vai: "O produto ou fato da campanha, para quem est\xE1 dispon\xEDvel, condi\xE7\xF5es e mec\xE2nica.",
    naoVai: "Quem \xE9 o p\xFAblico (vem do Brand System) e o momento, como Primeiro uso (vem do preset).",
    bom: "Conversor de moedas na maquininha: sem custo, dispon\xEDvel para quem tem o modelo X; 1% de cashback nas transa\xE7\xF5es eleg\xEDveis.",
    ruim: "P\xFAblico de empresas maiores, em primeiro uso, que precisa ser incentivado.",
    porqueRuim: "Repete o Perfil e o Contexto: a IA d\xE1 peso dobrado."
  },
  objetivo: {
    titulo: "Objetivo",
    subtitulo: "A mudan\xE7a que a campanha quer causar",
    camada: "campanha",
    vai: "O que deve mudar no comportamento do cliente e como saber se deu certo, em uma ou duas frases.",
    naoVai: "A descri\xE7\xE3o do produto (j\xE1 est\xE1 no Overview).",
    bom: "Fazer o cliente usar o conversor pela primeira vez em 30 dias. Medida: primeira transa\xE7\xE3o.",
    ruim: "Apresentar o conversor de moedas e suas vantagens.",
    porqueRuim: "Descreve o conte\xFAdo, n\xE3o a mudan\xE7a que se espera."
  },
  foco: {
    titulo: "Foco da comunica\xE7\xE3o",
    subtitulo: "O que s\xF3 esta pe\xE7a tem",
    camada: "peca",
    vai: "A ideia e o \xE2ngulo, a situa\xE7\xE3o da rotina escolhida e a frase que precisa sair igual (marcada como obrigat\xF3ria).",
    naoVai: "Quem \xE9 o p\xFAblico, o momento (Contexto, Argumento) e o vocabul\xE1rio dele: j\xE1 chegam sozinhos.",
    bom: "Situa\xE7\xE3o: evento na cidade. T\xEDtulo obrigat\xF3rio: \u201CChegou um cliente de fora?\u201D",
    ruim: "Empresas maiores, evite \u201Cpra voc\xEA\u201D. \xC9 o primeiro uso, ent\xE3o incentive a usar.",
    porqueRuim: "Repete o Tom do p\xFAblico e o Contexto do preset: a IA d\xE1 peso dobrado."
  },
  produtoResumo: {
    titulo: "O que \xE9",
    subtitulo: "O produto em uma ou duas frases",
    camada: "produto",
    vai: "O que \xE9 e que problema resolve. \xC9 a linha que a IA usa quando o cat\xE1logo \xE9 grande.",
    naoVai: "Pre\xE7o, taxa ou prazo (v\xE3o no Overview). Frase de venda ou chamada para a\xE7\xE3o (vai no Foco).",
    bom: "Recurso da maquininha que deixa o cliente estrangeiro pagar na moeda dele, enquanto o lojista recebe em reais.",
    ruim: "A solu\xE7\xE3o perfeita para turbinar o seu neg\xF3cio!",
    porqueRuim: "N\xE3o diz o que o produto \xE9, e a IA leva o tom de venda para todas as pe\xE7as."
  },
  produtoComoFunciona: {
    titulo: "Como funciona",
    subtitulo: "Recursos e funcionamento",
    camada: "produto",
    vai: "Um recurso ou fato por linha: o que faz, como faz, o que aceita.",
    naoVai: "Benef\xEDcio para o cliente (vai em Benef\xEDcios). Passo a passo (vai em Como usar).",
    bom: "Identifica o cart\xE3o estrangeiro e oferece pagar na moeda de origem.",
    ruim: "Mais agilidade e praticidade no seu dia a dia.",
    porqueRuim: "\xC9 benef\xEDcio gen\xE9rico, n\xE3o funcionamento. N\xE3o ajuda a IA a explicar o produto."
  },
  produtoParaQuem: {
    titulo: "Para quem e requisitos",
    subtitulo: "Quem pode usar e o que precisa ter",
    camada: "produto",
    vai: "Quem pode usar, equipamento ou conta necess\xE1ria, bandeiras e modalidades, quem mais usa.",
    naoVai: "Pre\xE7o, taxa, cashback, isen\xE7\xE3o e prazo: mudam por a\xE7\xE3o e v\xE3o no Overview da campanha.",
    bom: "Cart\xF5es Visa e Mastercard, no d\xE9bito e no cr\xE9dito \xE0 vista.",
    ruim: "Cashback de 1% pago no 2\xBA dia \xFAtil.",
    porqueRuim: "Se a condi\xE7\xE3o muda, todas as campanhas seguintes levam o n\xFAmero velho."
  },
  produtoComoUsar: {
    titulo: "Como usar",
    subtitulo: "O passo a passo para come\xE7ar",
    camada: "produto",
    vai: "Um passo por linha, na ordem. N\xE3o precisa numerar: o sistema numera.",
    naoVai: "Passos de uma a\xE7\xE3o espec\xEDfica, como participar de uma promo\xE7\xE3o (v\xE3o no Overview).",
    bom: "Inicie a venda normalmente e informe o valor.",
    ruim: "Baixe agora o app e aproveite!",
    porqueRuim: "\xC9 chamada para a\xE7\xE3o, n\xE3o um passo. O CTA de cada pe\xE7a vem do briefing."
  },
  produtoBeneficios: {
    titulo: "Benef\xEDcios",
    subtitulo: "O que o cliente ganha, como fato",
    camada: "produto",
    vai: "Um ganho concreto por linha, que vale em qualquer campanha.",
    naoVai: "Frase de venda, promessa sem comprova\xE7\xE3o ou ganho de uma oferta com prazo.",
    bom: "O cliente v\xEA o valor na moeda que conhece antes de pagar.",
    ruim: "Venda muito mais com o melhor conversor do mercado.",
    porqueRuim: "Promessa sem comprova\xE7\xE3o e compara\xE7\xE3o: a marca n\xE3o pode usar."
  },
  produtoComoCitar: {
    titulo: "Como citar",
    subtitulo: "Nome certo e o que n\xE3o dizer",
    camada: "produto",
    vai: "Grafia do nome e regras de men\xE7\xE3o que valem sempre que o produto aparece.",
    naoVai: "Regras que valem para toda a marca (v\xE3o em Do\u2019s e Don\u2019ts).",
    bom: "Pix \xE9 modalidade de pagamento, n\xE3o produto da marca.",
    ruim: "Nunca use g\xEDrias.",
    porqueRuim: "Vale para toda a marca, n\xE3o s\xF3 para este produto."
  }
};
function FieldHelp({ campo, manualHref, className }) {
  const guia = GUIA_CAMPOS[campo];
  const camada = CAMADAS_CONTEUDO.find((c) => c.id === guia.camada);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_popover.Popover.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_popover.Popover.Trigger,
      {
        type: "button",
        "aria-label": `Como preencher: ${guia.titulo}`,
        className: cn(
          "inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-muted-foreground/50 bg-background text-[11px] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[popup-open]:border-primary data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground",
          className
        ),
        children: "?"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_popover.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_popover.Popover.Positioner, { side: "bottom", align: "start", sideOffset: 8, className: "isolate z-50", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      import_popover.Popover.Popup,
      {
        "data-slot": "field-help",
        className: "w-[420px] max-w-[calc(100vw-32px)] origin-(--transform-origin) rounded-xl bg-popover p-4 text-popover-foreground shadow-lg ring-1 ring-foreground/10 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_popover.Popover.Title, { className: "text-sm font-semibold", children: guia.titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-0.5 text-xs text-muted-foreground", children: guia.subtitulo })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_popover.Popover.Close,
              {
                "aria-label": "Fechar",
                className: "cursor-pointer rounded p-0.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.X, { className: "size-4", "aria-hidden": "true" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-3 flex gap-1", "aria-label": `Camada: ${camada?.nome}`, children: CAMADAS_CONTEUDO.map((c) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "span",
            {
              className: cn(
                "flex-1 rounded py-1 text-center text-[11px] font-semibold",
                c.id === guia.camada ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                // Produto fica ao lado das camadas, não na fila: borda tracejada.
                c.id === "produto" && c.id !== guia.camada && "border border-dashed border-muted-foreground/40 bg-transparent"
              ),
              children: c.nome
            },
            c.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-3 grid grid-cols-2 gap-3 text-xs leading-relaxed", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1 font-semibold text-teal-700 dark:text-teal-400", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Check, { className: "size-3.5", strokeWidth: 2.5, "aria-hidden": "true" }),
                "Vai aqui"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-1 text-foreground/80", children: guia.vai })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1 font-semibold text-orange-800 dark:text-orange-400", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.X, { className: "size-3.5", strokeWidth: 2.5, "aria-hidden": "true" }),
                "N\xE3o vai aqui"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-1 text-foreground/80", children: guia.naoVai })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-3 flex flex-col gap-2 text-xs leading-relaxed", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 dark:border-teal-900 dark:bg-teal-950/40", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[10px] font-bold uppercase tracking-wide text-teal-800 dark:text-teal-400", children: "Bom exemplo" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
                "\u201C",
                guia.bom,
                "\u201D"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 dark:border-orange-900 dark:bg-orange-950/40", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[10px] font-bold uppercase tracking-wide text-orange-800 dark:text-orange-400", children: "Confunde a IA" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
                "\u201C",
                guia.ruim,
                "\u201D"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-1 text-muted-foreground", children: guia.porqueRuim })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-3 flex items-center justify-between gap-3 border-t border-border pt-3 text-xs", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "text-muted-foreground", children: [
              "Na d\xFAvida: ",
              camada?.pergunta.toLowerCase()
            ] }),
            manualHref && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: manualHref, className: "shrink-0 font-semibold text-primary hover:underline", children: "Ver no manual \u2192" })
          ] })
        ]
      }
    ) }) })
  ] });
}

// src/components/input.tsx
var import_input = require("@base-ui/react/input");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_input.Input,
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/components/label.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/popover.tsx
var import_popover2 = require("@base-ui/react/popover");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Popover({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_popover2.Popover.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_popover2.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_popover2.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_popover2.Popover.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      className: "isolate z-50",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        import_popover2.Popover.Popup,
        {
          "data-slot": "popover-content",
          className: cn(
            "w-72 origin-(--transform-origin) rounded-lg bg-popover p-1.5 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          ),
          ...props
        }
      )
    }
  ) });
}

// src/components/select.tsx
var React = __toESM(require("react"));
var import_select = require("@base-ui/react/select");
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function itemsFromChildren(children) {
  const items = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const props = child.props;
    if (props.value !== void 0 && (typeof props.children === "string" || typeof props.children === "number")) {
      items.push({ value: props.value, label: props.children });
      return;
    }
    if (props.children) {
      items.push(...itemsFromChildren(props.children));
    }
  });
  return items;
}
function Select({ children, ...props }) {
  const items = React.useMemo(() => itemsFromChildren(children), [children]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_select.Select.Root, { items, ...props, children });
}
function SelectGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.Group,
    {
      "data-slot": "select-group",
      className: cn("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.Value,
    {
      "data-slot": "select-value",
      className: cn("flex flex-1 text-left", className),
      ...props
    }
  );
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_select.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_select.Select.Icon,
          {
            render: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react5.ChevronDownIcon, { className: "pointer-events-none size-4 text-muted-foreground" })
          }
        )
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_select.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      alignItemWithTrigger,
      className: "isolate z-50",
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        import_select.Select.Popup,
        {
          "data-slot": "select-content",
          "data-align-trigger": alignItemWithTrigger,
          className: cn("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollUpButton, {}),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_select.Select.List, { children }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollDownButton, {})
          ]
        }
      )
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.GroupLabel,
    {
      "data-slot": "select-label",
      className: cn("px-1.5 py-1 text-xs text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_select.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_select.Select.ItemText, { className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap", children }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_select.Select.ItemIndicator,
          {
            render: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react5.CheckIcon, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.ScrollUpArrow,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_lucide_react5.ChevronUpIcon,
        {}
      )
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_select.Select.ScrollDownArrow,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_lucide_react5.ChevronDownIcon,
        {}
      )
    }
  );
}

// src/components/separator.tsx
var import_separator = require("@base-ui/react/separator");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_separator.Separator,
    {
      "data-slot": "separator",
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}

// src/components/sidebar-app-switcher.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function DefaultSystemIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      className: "size-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5", stroke: "currentColor", strokeWidth: "1.5" })
      ]
    }
  );
}
function ChevronDownIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", className, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function AppSwitcher({
  appName,
  systems,
  systemIcons,
  loading,
  className,
  onSystemNavigate
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      PopoverTrigger,
      {
        className: cn(
          "flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left transition-colors hover:bg-sidebar-accent/50",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-xl font-semibold text-foreground", children: appName }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-sm text-primary", children: "by Sai Creative" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChevronDownIcon2, { className: "size-4 shrink-0 text-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(PopoverContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: "Sistemas Sai Creative" }),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "px-2 py-1.5 text-sm text-muted-foreground", children: "Carregando\u2026" }) : systems.map((system) => {
        const icon = systemIcons?.[system.key] ?? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DefaultSystemIcon, {});
        const statusLabel = system.em_construcao ? "Em constru\xE7\xE3o" : !system.url ? "Em breve" : null;
        const itemContent = /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "flex items-center gap-1.5 text-sm font-medium text-foreground", children: [
              system.label,
              system.novo && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Badge, { className: "h-4 px-1.5 text-[10px]", children: "Novo" }),
              system.beta && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Badge, { variant: "outline", className: "h-4 px-1.5 text-[10px]", children: "Beta" })
            ] }),
            statusLabel && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-xs text-muted-foreground", children: statusLabel })
          ] })
        ] });
        if (statusLabel) {
          return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              "aria-disabled": "true",
              className: "flex cursor-not-allowed items-center gap-3 rounded-md px-2 py-2 opacity-50",
              children: itemContent
            },
            system.key
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "a",
          {
            href: system.url ?? void 0,
            onClick: onSystemNavigate ? (event) => onSystemNavigate(system, event) : void 0,
            className: "flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent",
            children: itemContent
          },
          system.key
        );
      })
    ] })
  ] });
}

// src/components/sidebar-brand-selector.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function ChevronDownIcon3({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", className, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function CheckIcon3({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", className, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M5 13l4 4L19 7", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function BrandThumb({ logoUrl }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "size-9 shrink-0 overflow-hidden rounded-md bg-muted", children: logoUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: logoUrl, alt: "", className: "size-full object-cover" })
  ) : null });
}
function SidebarBrandSelector({
  brands,
  selectedBrandId,
  onSelect,
  loading,
  footer,
  renderBrandExtra,
  className
}) {
  const [open, setOpen] = React2.useState(false);
  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId);
  function handleSelect(id) {
    onSelect(id);
    setOpen(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      PopoverTrigger,
      {
        className: cn(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-sidebar-accent/50",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BrandThumb, { logoUrl: selectedBrand?.logoUrl }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col items-start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-xs text-muted-foreground", children: "Perfil" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "w-full truncate text-left text-base font-semibold text-foreground", children: loading ? "Carregando\u2026" : selectedBrand?.name ?? "Selecione uma marca" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChevronDownIcon3, { className: "size-4 shrink-0 text-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(PopoverContent, { children: [
      brands.map((brand) => {
        const isSelected = brand.id === selectedBrandId;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "div",
          {
            role: "option",
            "aria-selected": isSelected,
            onClick: () => handleSelect(brand.id),
            className: "group flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BrandThumb, { logoUrl: brand.logoUrl }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "min-w-0 flex-1 truncate text-sm font-medium text-foreground", children: brand.name }),
              renderBrandExtra?.(brand),
              isSelected && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CheckIcon3, { className: "size-4 shrink-0 text-primary" })
            ]
          },
          brand.id
        );
      }),
      footer
    ] })
  ] });
}

// src/components/sidebar-nav.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function SidebarNavItem({
  href,
  label,
  icon,
  active,
  disabled,
  statusIndicator,
  onClick,
  linkComponent,
  className
}) {
  const Comp = !disabled && linkComponent ? linkComponent : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    Comp,
    {
      href: disabled ? void 0 : href,
      "aria-current": active ? "page" : void 0,
      "aria-disabled": disabled || void 0,
      onClick: disabled ? void 0 : onClick,
      className: cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "flex size-4 shrink-0 items-center justify-center [&_svg]:size-4", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "flex-1 truncate", children: label }),
        statusIndicator
      ]
    }
  );
}
function SidebarNavSection({ label, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn("flex flex-col gap-1 px-4 py-4", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "px-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { className: "flex flex-col gap-1", children })
  ] });
}

// src/components/sidebar-shell.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function SidebarShell({ children, footer, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "aside",
    {
      className: cn(
        "flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex-1 overflow-y-auto", children }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "border-t border-sidebar-border", children: footer })
      ]
    }
  );
}

// src/components/sidebar-user-footer.tsx
var import_lucide_react7 = require("lucide-react");

// src/components/theme-toggle.tsx
var React3 = __toESM(require("react"));
var import_next_themes = require("next-themes");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = React3.useState(false);
  React3.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "icon-sm",
        "aria-label": "Alternar tema",
        disabled: true,
        className,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Sun, { className: "size-4" })
      }
    );
  }
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "icon-sm",
      "aria-label": isDark ? "Mudar para modo claro" : "Mudar para modo escuro",
      onClick: () => setTheme(isDark ? "light" : "dark"),
      className,
      children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Moon, { className: "size-4" })
    }
  );
}

// src/components/sidebar-user-footer.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function SidebarUserFooter({ email, name, role, onLogout, className }) {
  const displayName = name?.trim() || null;
  const initials = displayName ? displayName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase() : email ? email.slice(0, 2).toUpperCase() : "??";
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: cn("flex flex-col gap-1 px-2 py-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2 rounded-md px-2 py-1.5", children: [
      email ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-sidebar-primary/15 text-xs font-semibold text-sidebar-primary", children: initials }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "min-w-0 flex-1", children: [
          displayName ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "truncate text-sm font-medium text-sidebar-foreground", children: displayName }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "truncate text-xs text-muted-foreground", title: email, children: email })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "truncate text-xs font-medium text-sidebar-foreground", children: email }),
          role && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs capitalize text-muted-foreground", children: role })
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ThemeToggle, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "button",
      {
        type: "button",
        onClick: onLogout,
        className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:outline-none",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react7.LogOut, { className: "size-4 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Sair" })
        ]
      }
    )
  ] });
}

// src/components/skeleton.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}

// src/components/sonner.tsx
var import_next_themes2 = require("next-themes");
var import_sonner = require("sonner");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Toaster = ({ ...props }) => {
  const { theme = "system" } = (0, import_next_themes2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react8.CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react8.InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react8.TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react8.OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react8.Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};

// src/components/tabs.tsx
var import_tabs = require("@base-ui/react/tabs");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime19 = require("react/jsx-runtime");
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_tabs.Tabs.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = (0, import_class_variance_authority3.cva)(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_tabs.Tabs.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_tabs.Tabs.Tab,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_tabs.Tabs.Panel,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/components/textarea.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/components/theme-provider.tsx
var import_next_themes3 = require("next-themes");
var import_jsx_runtime21 = require("react/jsx-runtime");
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_next_themes3.ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: false, ...props, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppSwitcher,
  Badge,
  Button,
  CAMADAS_CONTEUDO,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  FieldHelp,
  GUIA_CAMPOS,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  SidebarBrandSelector,
  SidebarNavItem,
  SidebarNavSection,
  SidebarShell,
  SidebarUserFooter,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  ThemeToggle,
  Toaster,
  badgeVariants,
  buttonVariants,
  cn,
  tabsListVariants,
  toast
});
