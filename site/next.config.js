/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Abusch',
    description: 'The official store for nonya.',
    icon: '/img/logo.svg',
    listUrl: 'https://abuschno.github.io/kasm-registry/',
    contactUrl: 'https://abusch.no',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
