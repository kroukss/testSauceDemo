require("dotenv").config({ path: `.env${process.env.E2E_ENV}` });
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  config.env.identifiant = process.env.IDENTIFIANT;
  config.env.password = process.env.PASSWORD;

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
    on("task", {
      setInfoPaiement: (info) => {
        global.info = info;
        return null;
      },
      getInfoPaiement: () => {
        if (global.info != null) {
          return global.info;
        } else {
          return "undefined";
        }
      },
    })
  );
  return config;
}

module.exports = defineConfig({
  video: true,
  videoCompression: 8,
  retries: 1,
  reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/features/**/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
  },
});
