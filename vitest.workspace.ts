import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./packages/components/vitest.config.ts",
  "./packages/play/vite.config.ts",
  "./packages/core/vite.umd.config.ts",
  "./packages/core/vite.es.config.ts"
])
