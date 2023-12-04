import { tailwindConfig } from '@jill64/svelte-tailwind'
import effect from '../dist/index.js'

/** @type {import('@jill64/svelte-tailwind').TailwindConfig} */
export default tailwindConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [effect]
})
