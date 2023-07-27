describe('Login', () => {
  it('successfully logs in', () => {
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));

    cy.contains('h1', 'Your Notes').should('be.visible');
    cy.contains('a', 'Create a new note').should('be.visible');
  });
});
