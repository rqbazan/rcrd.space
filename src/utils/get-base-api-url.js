export default function getBaseAPIUrl(req) {
  // for development
  if (process.env.NODE_ENV !== 'production') {
    return `${process.env.API}/api`
  }

  // for client
  if (!req) {
    return '/api'
  }

  // for server
  const protocol = req.headers['x-forwarded-proto']
  const hostname = req.headers['x-now-deployment-url']

  return `${protocol}://${hostname}/api`
}
