/* jshint node: true */

module.exports = function(environment) {
  var config = {
    modulePrefix: 'generic-company',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://*.firebase.com https://*.firebaseio.com",
      'font-src': "'self' data: http://fonts.gstatic.com",
      'frame-src': "https://*.firebase.com https://*.firebaseio.com",
      'connect-src': "'self' https://api.cloudinary.com res.cloudinary.com https://*.firebase.com https://*.firebaseio.com wss://*.firebaseio.com samewave-client-staging.herokuapp.com samewave-client-demo.herokuapp.com samewave-engine-production.herokuapp.com data:",
      'img-src': "'self' res.cloudinary.com api.cloudinary.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'media-src': "'self'",

    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // dev CSP settings
    config.contentSecurityPolicy['script-src'] += " samewave.dev:35729";
    config.contentSecurityPolicy['connect-src'] += " ws://samewave.dev:35729 http://localhost:3000";
    config.contentSecurityPolicy['report-uri'] = "http://localhost:4200 http://samewave.dev:4200";

    config.ENGINE_URL = 'http://localhost:3000';

    // config.APP.LOG_RESOLVER = true;
    config.APP.LOG_ACTIVE_GENERATION = false;
    config.APP.LOG_TRANSITIONS = true;
    // config.APP.LOG_TRANSITIONS_INTERNAL = true;
    config.APP.LOG_VIEW_LOOKUPS = false;

    // Disable features based on the version
    config.APP.VERSION = 8;
  }

  if (environment === 'test') {
    // Testem prefers this...
    config.baseURL = '/';
    config.locationType = 'none';

    // keep test console output quieter
    config.APP.LOG_ACTIVE_GENERATION = false;
    config.APP.LOG_VIEW_LOOKUPS = false;

    config.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return config;
};