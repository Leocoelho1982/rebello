// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: true },
      includeAssets: [
        'favicon.svg',
        'vite.svg',
        'logo_192.png',
        'logo_512.png',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: 'Rebello Micropigmentação',
        short_name: 'Rebello',
        description: 'Rebello Micropigmentação Capilar',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          { src: 'logo_192.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo_512.png', sizes: '512x512', type: 'image/png' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' }
        ]
      }
    })
  ]
})
