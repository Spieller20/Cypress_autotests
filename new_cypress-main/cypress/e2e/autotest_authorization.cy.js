describe('Проверка авторизации', function () {

    it('Успешный вход с правильным логином и правильным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get ('#mail').type('german@dolnikov.ru');
         cy.get ('#pass').type('iLoveqastudio1');
         cy.get ('#loginButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get ('#forgotEmailButton').click();
         cy.get ('#mailForgot').type('sveta777@mail.ru');
         cy.get ('#restoreEmailButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Ошибка авторизации с правильным логином и неправильным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get ('#mail').type('german@dolnikov.ru');
         cy.get ('#pass').type('iLoveqastudio15');
         cy.get ('#loginButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Ошибка авторизациис с неправильным логином и правильным паролем', function(){
         cy.visit('https://login.qa.studio/');
         cy.get ('#mail').type('geran@dolnikov.ru');
         cy.get ('#pass').type('iLoveqastudio1');
         cy.get ('#loginButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Ввести E-mail без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get ('#mail').type('germandolnikov.ru');
         cy.get ('#pass').type('iLoveqastudio1');
         cy.get ('#loginButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Ввести E-mail буквами разных регистров', function () {
         cy.visit('https://login.qa.studio/');
         cy.get ('#mail').type('GeRman@Dolnikov.ru');
         cy.get ('#pass').type('iLoveqastudio1');
         cy.get ('#loginButton').click();
         cy.get('#messageHeader').should ('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 }) 