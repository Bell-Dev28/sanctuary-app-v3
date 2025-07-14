import tailwind from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const postcssConfig = {
  plugins: {
    tailwind,
    autoprefixer,
  },
};

export default postcssConfig;
