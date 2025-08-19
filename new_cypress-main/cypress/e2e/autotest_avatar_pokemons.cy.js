describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('.k_footer_container_version', { timeout: 5000 }).contains('Версия 4.2.0').should('be.visible');
         cy.get('input[id="k_email"]', { timeout: 10000 }).type('USER_LOGIN');                           // вводим логин
         cy.get('input[id="k_password"').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.get('.header_card_trainer', { timeout: 10000 }).should('be.visible').click();
         cy.get('[data-qa="shop"]').should('be.visible').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').should('be.visible').last().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').should('be.visible').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment', { timeout: 10000 }).should('be.visible').and('not.have.class', '.style_1_base_button_payment.disable').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number', { timeout: 10000 }).should('be.visible').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible').and('not.have.class', '.style_1_base_button_payment.disable').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });

