// import injectCss from '@cxing/vitejs-plugin-inject-css'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import injectCss from './scripts/build/inject-css'

export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    injectCss(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: '@a110/rito',
      formats: ['es', 'umd'],
      fileName: format => `rito.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
