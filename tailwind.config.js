 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       backgroundImage: {
        'hero': "url('/Assets/images/mobileCake.jpg')",
      },
     },
   },
   plugins: [],
 }