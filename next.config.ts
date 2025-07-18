// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
   
      resolveAlias: {
        '@components': './components',
        '@utils': ['./src/utils', './utils'],
        
        // Alias complexes (si nécessaire)
        '@assets': {
          images: './public/images',
          fonts: './public/fonts'
        }
      }
    },
    
  }
}

export default nextConfig