import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["var(--font-unbounded)", ...fontFamily.sans],
        prompt: ["var(--font-prompt)", ...fontFamily.mono],
      },
      colors: {
        charcoalblue: "#17181D",
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(to right bottom, #930bfd, #c900da, #e700b9, #f8009b, #fe0082, #ff2570, #ff3c60, #ff5051, #ff6e47, #ff8a41, #ffa440, #ffbd47)',
      },
    },
  },
  plugins: [],
}
export default config
