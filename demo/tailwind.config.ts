import { Config } from 'tailwindcss'
import * as effect from '../dist/index.js'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [effect]
} satisfies Config

export default config
