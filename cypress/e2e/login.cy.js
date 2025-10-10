describe('Teste login de usuário', () => {
  beforeEach(() => {
    //Arrange
    //cy.visit(Cypress.env(URL))
    cy.visit('/')
    //cy.screenshot('apos-acessar-pagina')
  })

  it('Login com dados válidos com sucesso', () => {
    //Act
    cy.fazerLoginComCredenciaisValidas()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


  it('Login com dados inválidos sem sucesso', () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})