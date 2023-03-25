describe('Registro de novos usuários usando massa de dados da fixtures', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    const usuarios = require('../../fixtures/usuarios.json')

    usuarios.forEach(usuario => {
        it.only(`registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
})