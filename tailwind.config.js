/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a2d51',
        'brand-red': '#FA5959',
        'brand-blue': '#1aa3a2',
        'brand-grey': '#9194A2',
        'brand-white': '#F7F7F7',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, rgba(26,163,162,0.2) 0%, rgba(29,228,119,0.2) 100%)',
      },
    },
    fontFamily: {
      Poppins : ["Poppins, sans-serif"]
    },
    container : {
      center : true,
      padding: '0.5rem',
      screens : {
        lg : "1200px",
        xl : "1200px",
        "2xl" : "1200px",
      }
    }
  },
  plugins: [],
}

