describe('My_first_autotest', function() {
    it('Верный логин и пароль', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Восстановление пароля', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('test@test.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Верный логин и НЕверный пароль', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('НЕверный логин и верный пароль', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('erman@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Валидация на наличие собаки', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Приведение к строчным буквам в логине', function() {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})