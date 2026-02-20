import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#008AD2",
          blueLight: "#009EE3",
          red: "#E3000F",
          graphite: "#1F2328",
          surface: "#F5F8FB",
          border: "#DCE8F2"
        }
      },
      boxShadow: {
        card: "0 8px 24px rgba(31, 35, 40, 0.08)"
      },
      borderRadius: {
        card: "1rem"
      }
    },
  },
  plugins: [],
};

export default config;
