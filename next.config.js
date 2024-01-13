/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'],
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'utfs.io',
            port: ''
            }, {
                hostname: "img.clerk.com",
            }
        ]
        }
    }

module.exports = nextConfig