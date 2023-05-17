describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#ff80818187e8e81c0187e8e877b5000b').click()

    const expectedUrl = 'http://localhost:3000/match/ff80818187e8e81c0187e8e877b5000b'; // URL esperada de la página redirigida

    cy.location('href').should('eq', expectedUrl);

    cy.get("#arrowId").click()

    const expectedUrlArrow = 'http://localhost:3000/'; // URL esperada de la página redirigida

    cy.location('href').should('eq', expectedUrlArrow);
  })
})