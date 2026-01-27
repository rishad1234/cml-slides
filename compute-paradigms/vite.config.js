import { defineConfig } from 'vite';

export default defineConfig({
  // Allow importing from node_modules
  server: {
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
