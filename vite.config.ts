import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'node:fs'

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-static-routes',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '/').split('?')[0].replace(/\/$/, '');
        if (!/^\/(projects(?:\/[a-z0-9-]+)?|profile|contact)$/.test(path)) return next();
        const file = resolve(__dirname, 'public' + path + '/index.html');
        if (!existsSync(file)) return next();
        res.setHeader('Content-Type', 'text/html');
        res.end(readFileSync(file));
      });
    },
  }],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: { port: 5199, host: '127.0.0.1' },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
