'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'site-aiki3',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-google-maps': {
      key: 'AIzaSyDam2nPRQoiGNPRAl1bLWpGTjYacbK2mnM',
      language: 'fr',
      region: 'FR',
      protocol: 'https',
      version: '3.33',
      libraries: ['geometry', 'places'],
      // client: undefined,
      // channel: undefined,
      // baseUrl: '//maps.googleapis.com/maps/api/js'
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Force URL's anchor to load the starting state of the application
    // This is needed because our current host can't support URL Rewriting
    ENV.APP.locationType = 'hash';
  }

  return ENV;
};
