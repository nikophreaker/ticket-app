import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        header: "#174290",
        headerCover: "#17429090",
        page: "#FFFFFF",
        card: "#CFEAFF",
        footer: "#0967C6",
        "default-text": "#FFFFFF",
        "second-text": "#000000",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
