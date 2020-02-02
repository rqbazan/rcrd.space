import '~/global.css'
import NProgress from 'nprogress'
import * as scripts from '~/scripts'

export const onClientEntry = () => {
  NProgress.configure({
    template: '<div class="bar" role="bar"></div>'
  })

  const node = document.createElement('script')
  node.innerHTML = scripts.webfont({
    google: {
      families: ['IBM+Plex+Mono:400,500', 'Solway:300&display=swap']
    }
  })
  document.body.appendChild(node)
}

export const onPreRouteUpdate = () => {
  NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
}
