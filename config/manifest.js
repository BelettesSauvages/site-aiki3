/* eslint-env node */
'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    name: 'Aiki3',
    short_name: 'Aiki3',
    description: "Aiki3 club d'Aikido à Troyes",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'assets/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        targets: ['apple'],
      },
      {
        src: '/assets/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        targets: ['favicon'],
      },
      {
        src: '/assets/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        targets: ['favicon'],
      },
      {
        src: '/assets/icons/mstile-150x150.png',
        type: 'image/png',
        element: 'square150x150logo',
        targets: ['ms'],
      },
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
