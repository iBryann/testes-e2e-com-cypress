import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    requestTimeout: 20000,
    baseUrl: 'https://notes-serverless-app.com',
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
