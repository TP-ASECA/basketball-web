describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#ff808181882b6e8001882b6eec2a0000').click()

    const expectedUrl = 'http://localhost:3000/match/ff808181882b6e8001882b6eec2a0000'; // URL esperada de la página redirigida

    cy.location('href').should('eq', expectedUrl);
  })
})