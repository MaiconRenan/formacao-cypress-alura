const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'relatorios-de-teste',
    embeddedScreenshots: false,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    html: true,
    json: false,
    timestamp:'ddmmyyyy'
  },
  e2e: {
    baseUrl:'https://alura-fotos.herokuapp.com'
  },
});
