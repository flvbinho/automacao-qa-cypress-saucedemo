const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, // Desliga gravação de vídeo para deixar a pipeline mais rápida
    screenshotOnRunFailure: true, // Tira print automático se o teste falhar
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});