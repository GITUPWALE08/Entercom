/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the ESS Logo
        ess: {
          purple: '#9333EA', // A vibrant tech purple
          darkPurple: '#581c87',
          navy: '#0F172A',   // Slate-900 for deep contrast
          blue: '#1E3A8A',   // Corporate blue
          light: '#F3F4F6',  // Light gray background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import Inter in index.css if you want this look
      }
    },
  },
  plugins: [],
}