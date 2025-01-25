/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding :  {
        '5%' : '5%',
      },
      fontFamily : {
        'main' : ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'primary' : '#2e328d',
        'textgray' : '#58585B',
        'temp' : '#858693',
        'black' : '#1a1e1c',
        'blackbg' : '#1a1e1c'
      },
      boxShadow : {
        'cta' : '0 12px 35px 0 rgba(46, 50, 141, 0.21)' ,
        'faq' : '0 6px 24px 0 rgba(27, 27, 27, 0.04)' ,
        'faq-hover' : '0 4px 15px 0 rgba(27, 27, 27, 0.12)'
      },
      backgroundImage : {
        'two-sides' : 'linear-gradient(180deg, #fbfbfb 50%, #fff 0);'
      }
    },
  },
  plugins: [],
}
