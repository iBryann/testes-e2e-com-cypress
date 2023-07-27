import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(on, config);
    },
  },
});
