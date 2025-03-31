module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    
  },
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
};
