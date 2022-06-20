const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 
    //'http://localhost:3000/user',
    // 'https://restaurants-clientversion.herokuapp.com/'),
     'http://localhost:3000',
     // 'https://example.cypress.io/commands/actions',
    env:{
      navBarText:'cypress.io'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
