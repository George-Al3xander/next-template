import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "geist-sans": ["var(--font-geist-sans)", ...fontFamily.sans],
                "geist-mono": ["var(--font-geist-mono)", ...fontFamily.mono],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;
