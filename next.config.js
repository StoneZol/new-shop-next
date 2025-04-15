const withPWA = require("next-pwa")({
  dest: "public",  // Папка для выхода
  register: true,  // Регистрация сервис-воркера
  skipWaiting: true,  // Сразу обновить сервис-воркер
  disable: process.env.NODE_ENV === "development",  // Отключить в dev-режиме
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
});



