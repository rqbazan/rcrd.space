import { configureSitemap } from '@sergeymyssak/nextjs-sitemap'
import path from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.resolve(CURRENT_DIR, '..', 'public')
const PAGES_DIR = path.resolve(CURRENT_DIR, '..', 'src', 'pages')

function main() {
  const sitemapGenerator = configureSitemap({
    domains: [
      {
        domain: 'rcrd.space',
        defaultLocale: 'en',
        http: true,
      },
    ],
    targetDirectory: PUBLIC_DIR,
    pagesDirectory: PAGES_DIR,
  })

  sitemapGenerator.generateSitemap()
}

main()
