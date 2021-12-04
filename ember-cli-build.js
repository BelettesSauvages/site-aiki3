'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapFont: false,
      importBootstrapCSS: false,
    },
    fingerprint: {
      exclude: ['assets/gallery_*.jpg', 'assets/link_*.jpg', 'assets/*.pdf'],
    },
  });

  return app.toTree();
};
