import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    },
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#5685ee",
          "secondary-color": "#f87171",
          "black": "#333333",
          "layout-header-background": "#333333",
          "layout-header-height": "52px",
          "link-color": "#1DA57A",
          "border-radius-base": "8px",
        },
        javascriptEnabled: true,
      },
      sass: {},
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  }
})



