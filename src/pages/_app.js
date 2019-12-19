import NextApp from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'src/index.css'

NProgress.configure({
  template: '<div class="bar" role="bar"></div>'
})
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default NextApp
