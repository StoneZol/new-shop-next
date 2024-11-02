
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Разрешить загрузку изображений с любых доменов
        },
        {
          protocol: 'http',
          hostname: '**', // Разрешить загрузку изображений с любых доменов через HTTP
        },
      ],
    },
  };
  