/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
      
        'primary' : {
          100: '#FCC537',
          200:  '#E1A302'
        },
        
        'text' : {
          'standard' : '#FFFFFF',
          }
        
      },
      backgroundImage: {
        'homebg': "url('./background.png')",
        }
    },
  },
  plugins: [],
  
}