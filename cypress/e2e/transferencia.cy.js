describe('Tranferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    }) 

    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        // cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
        // cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
        // cy.get('#valor').click().type('11')
        // cy.contains('button', 'Transferir').click()

        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '11')

        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5mil sem o token', () => {

        //Act
        // cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
        // cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
        // cy.get('#valor').click().type('5000.01')
        // cy.contains('button', 'Transferir').click()

        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5000.01')

        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
});