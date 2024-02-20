/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#141029",
        "secondary": "#261E4E",
        "accent": "#8f7ff5",
        "secondary2":"#1D173B",
        "button":'#6554bc',
      },
      dropShadow: {
        'xl': '0 5px 5px rgba(0, 0, 0)',
        '2xl': [
            '0 10px 10px rgba(0, 0, 0, 0.2)',
        ]
      },
      
    },
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
