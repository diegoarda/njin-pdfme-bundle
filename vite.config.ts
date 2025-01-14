import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      entry: 'src/main.ts',
      name: 'PDFMe',
      fileName: 'pdfme',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      input: 'src/main.ts',
    },
  },
  server: {
    port: 3000,
  },
});