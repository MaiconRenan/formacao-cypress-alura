describe('testes de login válido e invaálido', () => {
    beforeEach(() => {
        cy.visit('/')

        // cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        //     statusCode:400
        // }).as('stubPost')
    })

    it('realiza login com usuário inválido', () => {
        cy.login('maicon', '123');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    it('realiza login com senha inválida', () => {
        cy.login('flavio', 'xxx');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    it('realiza login com usuário e senha inválida', () => {
        cy.login('abc', 'xxx');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    it.only('realiza login com usuário e senha válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        // cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })
})