import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'svgColorReplacer',
      fileName: 'index',
      formats: ['es', 'amd', 'umd', 'iife', 'cjs', 'esm']
    },
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
          extensions: ['.js', '.ts'],
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
