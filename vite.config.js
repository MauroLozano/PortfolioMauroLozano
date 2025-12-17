import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    createHtmlPlugin({
      minify: true,
      inject:{
        tags:[
          {
            tag: 'link',
            attrs: {
              rel: 'preload',
              href: '/assets/style.css',
              as: 'style'
            },
            injectTo: 'head-prepend',
          }
        ],
      },
    })
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  }
})
