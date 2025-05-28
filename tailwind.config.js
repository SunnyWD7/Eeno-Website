/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    keyframes: {
      upDown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      scroll: {
        "from": { opacity: "0.5", scale: "0.7" },
        "to": { opacity: "1", scale: "1" }
      }
    },
    animation: {
      upDown: 'upDown 2s ease-in-out infinite',
      scroll: "scroll 5s linear",
    },
  },
  plugins: [],
}