describe('Teste login de usuário', () => {
  beforeEach(() => {
    //Arrange
    cy.visit(Cypress.env('URL'))
    //cy.screenshot('apos-acessar-pagina')
  })

  it('Login com dados válidos com sucesso', () => {
    
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    //cy.screenshot('apos-informar-dados-validos')
    cy.get('#login-section > .btn').click()
    //cy.screenshot('apos-clicar-no-botao-entrar')

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


  it('Login com dados inválidos sem sucesso', () => {

    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})