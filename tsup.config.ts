import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom'],
  // O bundle inteiro precisa do banner "use client": o Toaster (sonner.tsx)
  // chama useTheme() de verdade no corpo da função, e como tudo é
  // empacotado num único arquivo (splitting: false), directives "use
  // client" por arquivo-fonte individual não sobrevivem ao bundling — só
  // um banner no nível do arquivo final resolve isso.
  //
  // Isso reintroduz a restrição de que Server Components não podem CHAMAR
  // (só renderizar como JSX) as funções utilitárias puras do pacote
  // (buttonVariants, cn, badgeVariants, tabsListVariants) — só aconteceu
  // uma vez até agora (hub/app/page.tsx), resolvido isolando aquele uso
  // específico num Client Component próprio (hub/components/AdminLink.tsx).
  // Se isso voltar a acontecer em outro app, a mesma solução se aplica:
  // não remova este banner de novo — extraia um Client Component local.
  banner: {
    js: '"use client";',
  },
})
