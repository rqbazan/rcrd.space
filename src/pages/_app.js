import '~/global.css'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

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
