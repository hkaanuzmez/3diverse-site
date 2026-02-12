import type { Config } from 'tailwindcss'
export default {
  content: ['./src/app/**/*.{ts,tsx}','./src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: { extend: { colors: { brand: { primary:'#6A00F4', secondary:'#C86BFA', accent:'#F59E0B', bg:'#0F0F14', surface:'#16161C', border:'#27272A' } } } },
  plugins: [],
} satisfies Config
