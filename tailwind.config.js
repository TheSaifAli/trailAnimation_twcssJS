/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        heartAnime:{
        '0%':{
          transform:'translate(-50%,-50%)',
          opacity:'1',
         
        },
        '100%':{
          transform:'translate(-50%,-5000%)',
          opacity:'0',
        },
      }
      }
    },
  },
  plugins: [],
}

