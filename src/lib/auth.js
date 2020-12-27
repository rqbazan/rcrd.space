import { httpClient } from './client'

const defaultLogin = {
  username: process.env.STRAPI_USERNAME,
  password: process.env.STRAPI_PASSWORD
}

export async function getJWT({ username, password } = defaultLogin) {
  const { data } = await httpClient.post('/auth/local', {
    password,
    identifier: username
  })

  return data.jwt
}
