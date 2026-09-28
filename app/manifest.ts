import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Entrenamiento Integral',
    short_name: 'Entrenamiento Integral',
    description: 'Gestión y Planificación de Entrenamiento Integral',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#dc2626',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
