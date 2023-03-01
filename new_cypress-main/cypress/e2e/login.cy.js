
describe('Тестирование логина и пароля QA Studio', function () {
    
    it('Позитивная Авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('почта');
        cy.get('#pass').type('пароль'); 
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
         })

    it('Восстановление пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('почта');
        cy.get('#restoreEmailButton').click()
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Неправильный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('почта');
        cy.get('#pass').type('пароль'); 
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Неправильный логин', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('почта');
        cy.get('#pass').type('пароль'); 
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Логин без "@"', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('почта без @');
        cy.get('#pass').type('пароль'); 
        cy.get('#loginButton').click()
        cy.contains('Нужно исправить проблему валидации').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Логин без строчных букв', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ПоЧтА');
        cy.get('#pass').type('пароль'); 
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })
    

})
