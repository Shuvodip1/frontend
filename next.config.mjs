/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: '',
                pathname: '/v0/b/z-tube-53cf1.appspot.com/**',
            },
        ],
    },
};

export default nextConfig;
