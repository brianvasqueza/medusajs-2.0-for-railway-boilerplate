const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-production-4684.up.railway.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL.replace(
          "https://",
          ""
        ),
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
}

module.exports = nextConfig
