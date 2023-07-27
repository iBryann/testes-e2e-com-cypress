describe('Poliedro Tests', () => {

  it('BQ: Export document', () => {
    cy.log('P+ login');
    cy.intercept('POST', 'https://pmais-api.p4ed.com/api/v1/login').as('postLogin');
    cy.visit('https://pmais.p4ed.com/');
    cy.get('input[name="email"]').type(Cypress.env('PMAIS_USERNAME'));
    cy.get('input[name="password"]').type(Cypress.env('PMAIS_PASSWORD'));
    cy.get('button[type="submit"]').click();
    cy.wait('@postLogin');
    cy.contains('p', 'Aplicativos').should('be.visible');

    cy.log('Select profile');
    cy.visit('https://pmais.p4ed.com/poliedro/users');
    cy.get('#combo-box-escola').type('2005', {
      waitForAnimations: true,
    });
    cy.get('.MuiAutocomplete-popper').type('{downArrow}{enter}');
    cy
      .get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-root')
      .type(`${'{downArrow}'.repeat(4)}{enter}{esc}`);
    cy.contains('div', 'Professor 02').click();
    cy.contains('button', 'Logar como usuário').click();

    cy.log('Open BQ');
    cy.contains('button', 'Banco de Questões').click();
  });

});