/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...Array.from({ length: 1025 }, (_, i) => i).reduce((acc, curr) => {
          acc[curr] = `${curr}px`;
          return acc;
        }, {}),
      },
    },
  },
  safelist: [
    ...Array.from({ length: 1025 }, (_, i) => `top-${i}`),
    ...Array.from({ length: 1025 }, (_, i) => `left-${i}`),
    ...Array.from({ length: 1025 }, (_, i) => `w-${i}`),
    ...Array.from({ length: 1025 }, (_, i) => `h-${i}`),
  ],
  plugins: [],
};
