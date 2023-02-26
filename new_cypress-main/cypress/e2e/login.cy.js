
describe('Тестирование логина и пароля QA Studio', function () {
    
    it('Позитивная Авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
         })

    it('Восстановление пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('bashkirov.max@yandex.ru');
        cy.get('#restoreEmailButton').click()
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Неправильный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2'); 
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Неправильный логин', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('g1erman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Логин без "@"', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click()
        cy.contains('Нужно исправить проблему валидации').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })

    it('Логин без строчных букв', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.end();
        })
    

})