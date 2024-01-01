import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      organisms: path.resolve('./src/lib/organisms'),
      atoms: path.resolve('./src/lib/atoms'),
      molecules: path.resolve('./src/lib/molecules'),
      pages: path.resolve('./src/lib/pages'),
      stores: path.resolve('./src/stores')
    }
  }
})
