import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'svgColorReplacer',
      fileName: 'index',
      formats: ['es', 'amd', 'umd', 'iife', 'cjs', 'esm']
    },
    rollupOptions: {
      external: ['parse5'],
      plugins: [
        babel({
          babelHelpers: 'bundled',
          extensions: ['.js'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['defaults', 'not ie <= 11', 'last 2 versions']
                }
              }
            ]
          ]
        })
      ]
    }
  }
})
