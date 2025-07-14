import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulseFast: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
