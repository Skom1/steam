/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        steambutton:'#5c7e10',
        steamdark: '#171a21',
        steaminput: '#32353c',
        fontinicio: '#1989e3',
        steamlogin: '#07beff',
        steamlogin2: '#2d74ff',
        steammovil: '#212c3d',
        steamletramovil: '#5daddd',
        steambody: '#2d405e',
        steambg: '#172230',
        steamletra: '#2f89bc',
        steamletrainicia: '#d2e885',
        steamletragris: '#82909b',
        steambgjoin: '#212429'
      },
      backgroundImage: {
        'catalogo': "url('/public/logo_steam.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
