/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    colors: {
      defaultColor: '#F8F9FA',//라이트 그레이
      pointColor: '#D7CCC8', //라이트 베이지
      serveColor: '#556B2F', //다크 카키
      logoColor: '#001e3e',
      gray: 'rgb(156 163 175)'
    },
    extend: {
      fontFamily: {
        Interop: ["Interop"]
      },
       screens: {
        'custom': '1200px',
      },
      keyframes: {
        fadeIn:{
          'from': {
            height: '0px',
            opacity: 0,
            // transform: 'translateY(7px)'
          },
          'to': {
            height: '100%',
            // transform: 'translateY(-100px)',
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            // transform: 'translateY(-100px)',
            opacity: 0,
            transform: "translateY(-10px)",
          }
        }
      }
    },
  },
  plugins: [],
}

