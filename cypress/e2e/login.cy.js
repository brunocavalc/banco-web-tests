describe('Teste login de usuário', () => {
  it('Login com dados válidos', () => {
    //Arrange
    cy.visit('http://localhost:4000/')
    
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('12345')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it.only('Login com dados inválidos', () => {
    
    //Arrange
    cy.visit('http://localhost:4000/')


    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('12345')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.get('.toast').should('be.visible')




    cy.get('.toast')
  })
})