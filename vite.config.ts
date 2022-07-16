import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import { resolve } from 'path'
import pkg from './package.json';

const banner = `/**
 * Vue 3 Price Ticker ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @Author: Hasan Parasteh
 * @Email: hasanparasteh@gmail.com
 * @license MIT
 */`;


export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    typescript({ tsconfig: "./tsconfig.json" }),
    vue({
      "isProduction": true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue3-price-ticker',
      formats: ["cjs", "es", "umd"]
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        extend: true,
        exports: "named",
        sourcemap: true,
        banner,
        strict: true,
        globals: {
          vue: 'Vue'
        },
      },
    }
  }
})
