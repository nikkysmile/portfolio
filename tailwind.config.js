module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],

  extend: {
  animation: {
    float: "float 6s ease-in-out infinite",
    fadeIn: "fadeIn 1.5s ease-out forwards",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(-10px)" },
      "50%": { transform: "translateY(10px)" }
    },
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    }
  }
}

};
