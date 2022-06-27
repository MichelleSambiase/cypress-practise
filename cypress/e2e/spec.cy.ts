describe('My first test', () => {
  // chequeo que la pagina se abre correctamente.
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    // Should be on a new URL which
    // includes '/commands/actions
    cy.url().should('include', '/commands/actions');

    // Get an input, type into it and verify
    // that the value has been updated

    /*
    And there you have it: a short test in Cypress that visits a page, 
    finds and clicks a link,
    verifies the URL and then verifies the behavior of an element on the new page. 
    If we read it out loud, it might sound like:
    */

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});

export {};
