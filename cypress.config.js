
const { defineConfig } = require("cypress");

{
  baseUrl:"http://localhost:3000";
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

