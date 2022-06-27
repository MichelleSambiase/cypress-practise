describe('first test!', () => {
  it('show page content', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome');

    cy.get('[data-cy="button"]').click();
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=button]').click();
    cy.get('#data-input-test').click();
    cy.get('#data-input-test').type('hola');
  });
});
