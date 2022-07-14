const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    API_ENDPOINT: 'http://localhost:8000/api',
    TOKEN_KEY: 'blogful-client-auth-token',
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
