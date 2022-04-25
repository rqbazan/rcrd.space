const env = {
  PROD: process.env.NODE_ENV === 'production',
  GITHUB_API_URL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
}

export default env
