describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/addMatch')

    cy.get(".date-picker").click().type('05172023')

    cy.get(".HomeTeamSelect").click().type('Wizard')
    cy.contains("Wizard").click()

    cy.get(".AwayTeamSelect").click().type('Heat')
    cy.contains("Heat").click()

    cy.get("#20000441").click().type(2)
    cy.get("#20000517").click().type(14)
    cy.get("#20001406").click().type(21)
    cy.get("#20001418").click().type(9)
    cy.get("#20001858").click().type(15)
    cy.get("#20001871").click().type(2)

    cy.get("#20000457").click().type(31)
    cy.get("#20000515").click().type(3)
    cy.get("#20000572").click().type(10)
    cy.get("#20000689").click().type(10)
    cy.get("#20000754").click().type(10)
    cy.get("#20000780").click().type(10)

    const expectedHomeScore = 63;
    const expectedAwayScore = 74;

    cy.get("#homeResult").should("have.value",expectedHomeScore.toString())
    cy.get("#awayResult").should("have.value", expectedAwayScore.toString())

    cy.get("#20000457-Star").click()

    cy.get("#saveMatchButton").click()

    const expectedUrlArrow = 'http://localhost:3000/'; // URL esperada de la página redirigida

    cy.location('href').should('eq', expectedUrlArrow);
  })
})