describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/addMatch')

    cy.get(".date-picker").click().type('05172023')

    cy.get(".HomeTeamSelect").click().type('Wizard')
    cy.contains("Wizard").click()

    cy.get(".AwayTeamSelect").click().type('Heat')
    cy.contains("Heat").click()

    const homePoints = [
      { id: "#score-input1-Home", value: 2 },
      { id: "#score-input2-Home", value: 14 },
      { id: "#score-input3-Home", value: 21 },
      { id: "#score-input4-Home", value: 9 },
      { id: "#score-input5-Home", value: 15 },
      { id: "#score-input6-Home", value: 2 }
    ];

    homePoints.forEach((score) => {
      cy.get(score.id).click().type(score.value);
    });

    const awayPoints = [
      { id: "#score-input1-Away", value: 31 },
      { id: "#score-input2-Away", value: 3 },
      { id: "#score-input3-Away", value: 10 },
      { id: "#score-input4-Away", value: 10 },
      { id: "#score-input5-Away", value: 10 },
      { id: "#score-input6-Away", value: 10 }
    ];

    awayPoints.forEach((score) => {
      cy.get(score.id).click().type(score.value);
    });

    const homeRebounds = [
      { id: "#rebounds-input1-Home", value: 5 },
      { id: "#rebounds-input2-Home", value: 9 },
      { id: "#rebounds-input3-Home", value: 17 },
      { id: "#rebounds-input4-Home", value: 4 },
      { id: "#rebounds-input5-Home", value: 1 },
      { id: "#rebounds-input6-Home", value: 2 }
    ];

    homeRebounds.forEach((rebounds) => {
      cy.get(rebounds.id).click().type(rebounds.value);
    });

    const awayRebounds = [
      { id: "#rebounds-input1-Away", value: 7 },
      { id: "#rebounds-input2-Away", value: 3 },
      { id: "#rebounds-input3-Away", value: 11 },
      { id: "#rebounds-input4-Away", value: 5 },
      { id: "#rebounds-input5-Away", value: 0 },
      { id: "#rebounds-input6-Away", value: 18 }
    ];

    awayRebounds.forEach((rebounds) => {
      cy.get(rebounds.id).click().type(rebounds.value);
    });

    const homeFaults = [
      { id: "#faults-input1-Home", value: 2 },
      { id: "#faults-input2-Home", value: 5 },
      { id: "#faults-input3-Home", value: 9 },
      { id: "#faults-input4-Home", value: 1 },
      { id: "#faults-input5-Home", value: 8 },
      { id: "#faults-input6-Home", value: 2 }
    ];

    homeFaults.forEach((faults) => {
      cy.get(faults.id).click().type(faults.value);
    });

    const awayFaults = [
      { id: "#faults-input1-Away", value: 3 },
      { id: "#faults-input2-Away", value: 0 },
      { id: "#faults-input3-Away", value: 8 },
      { id: "#faults-input4-Away", value: 2 },
      { id: "#faults-input5-Away", value: 14 },
      { id: "#faults-input6-Away", value: 5 }
    ];

    awayFaults.forEach((faults) => {
      cy.get(faults.id).click().type(faults.value);
    });

    const expectedHomeScore = 63;
    const expectedAwayScore = 74;

    cy.get("#homeResult").should("have.value",expectedHomeScore.toString())
    cy.get("#awayResult").should("have.value", expectedAwayScore.toString())

    cy.get("#star1-Home").click()

    cy.get("#saveMatchButton").click()

    const expectedUrlArrow = 'http://localhost:3000/'; // URL esperada de la página redirigida

    cy.location('href').should('eq', expectedUrlArrow);
  })
})