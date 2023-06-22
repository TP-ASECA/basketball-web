// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//
//     cy.get('#match0').click()
//
//     const expectedUrl = 'http://localhost:3000/match/' ; // URL esperada de la página redirigida
//
//     cy.location('href'.substring(0,27)).should('eq', expectedUrl);
//   })
// })

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#match0').click();

    const expectedUrl = 'http://localhost:3000/match/'; // URL esperada de la página redirigida
    const expectedUrlLength = expectedUrl.length;

    cy.location().should((location) => {
      expect(location.href.substring(0, expectedUrlLength)).to.eq(expectedUrl);
    });
  });
});