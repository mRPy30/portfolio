import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const configuredUrl =
    env.VITE_SITE_URL ||
    env.VITE_VERCEL_PROJECT_PRODUCTION_URL ||
    env.VERCEL_PROJECT_PRODUCTION_URL ||
    ''
  const productionUrl = configuredUrl
    ? (configuredUrl.startsWith('http') ? configuredUrl : `https://${configuredUrl}`).replace(/\/$/, '')
    : ''

  const seoPlugin = {
    name: 'production-seo-files',
    transformIndexHtml(html) {
      if (!productionUrl) return html

      return html.replace(
        '</head>',
        `    <link rel="canonical" href="${productionUrl}/" />\n    <meta property="og:url" content="${productionUrl}/" />\n  </head>`,
      )
    },
    generateBundle() {
      const sitemapLine = productionUrl ? `\nSitemap: ${productionUrl}/sitemap.xml\n` : '\n'
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${sitemapLine}`,
      })

      if (productionUrl) {
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${productionUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
        })
      }
    },
  }

  return {
    plugins: [react(), tailwindcss(), seoPlugin],
  }
})
