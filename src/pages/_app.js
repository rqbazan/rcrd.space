import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '~/styles/tailwind.css'
import 'tailwindcss/utilities.css'
import '~/styles/global.css'

NProgress.configure({
  template: '<div class="bar" role="bar"></div>'
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

export default App
