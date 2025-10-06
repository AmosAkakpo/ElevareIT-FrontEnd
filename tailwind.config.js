export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        tealCustom: '#019d90', // your new color
        purpleAccent: '#7C3AED', // secondary
        goldAccent: '#D4AF37', // highlights
        softTeal: '#00BFA6', // hover / subtle bg
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
        apple: [
          "-apple-system", // iOS & macOS system font
          "BlinkMacSystemFont", // Safari fallback
          "Segoe UI", // Windows
          "Roboto", // Android
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
      },
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
         blob: {
          "0%, 100%": { backgroundColor: "#34d399" }, // emerald-400
          "33%": { backgroundColor: "#a855f7" }, // purple-500
          "66%": { backgroundColor: "#facc15" }, // yellow-400 (gold-ish)
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        typing: "typing 2s steps(20, end) forwards, blink .7s step-end infinite",
        gradient: "gradient 5s ease infinite",
        blob: "blob 8s infinite ease-in-out",
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
    },
  },
  plugins: [],
}
