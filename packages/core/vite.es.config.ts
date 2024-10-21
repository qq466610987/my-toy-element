import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts'
import { filter, map } from "lodash-es";
import { readdirSync } from 'fs';

function getDirectories(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  )
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/es/type'
    })
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'toy-element',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        manualChunks(id) {
          console.log(id)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes("/packages/utils")) {
            return 'utils'
          }
          for (const dirName of getDirectories("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        }
      }
    },

  }
});

