import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/abstracts/_variables.scss"; @import "./src/styles/abstracts/_mixins.scss";`,
      }
    }
  },
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
});