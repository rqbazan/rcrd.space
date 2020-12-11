module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        selection: '#00fff2',
        body: '#f2f2f2',
        accent: '#fcd303',
        text: '#393e46'
      },
      padding: {
        '10vw': '10vw'
      }
    }
  },
  variants: {
    margin: ['responsive']
  },
  plugins: []
}
