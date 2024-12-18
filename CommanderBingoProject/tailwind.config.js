/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xlarge: { raw: "(max-width: 1440px)" },
        large: { raw: "(max-width: 1200px)" },
        medium: { raw: "(max-width: 1024px)" },
        small: { raw: "(max-width: 768px) or (max-height: 780px)" },
        xsmall: { raw: "(max-width: 675px) or (max-height: 700px)" },
        xxsmall: { raw: "(max-height: 490px)" },
      },
    },
  },
  plugins: [],
};
