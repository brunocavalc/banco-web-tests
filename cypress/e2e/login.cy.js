describe('Teste login de usuário', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000/')
  })

  it('Login com dados válidos com sucesso', () => {
    
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos sem sucesso', () => {
    
    //Arrange
    cy.visit('http://localhost:4000/')

    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('12345')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})