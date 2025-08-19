describe('Битва покемонов', function() { // название набора тестов
    it('Покупка нового аватара для тренера', function() { // название теста
        cy.visit('https://pokemonbattle.ru'); // переход на сайт
        cy.get('#k_email').type('USER_LOGIN'); // ввод логина
        cy.get('#k_password').type('USER_PASSWORD'); // ввод пароля
        cy.get('.MuiButton-root').click(); // нажатие на Подтвердить
        cy.get('.header_card_trainer').click(); // клик на аву тренера
        cy.get('[data-qa="shop"]').click(); // клик на Смену аватара
        cy.get('.available > button').first().click(); // клик Купить первый доступный аватар
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111'); // ввод номера карты
        cy.get(':nth-child(1) > .style_1_base_input').type('10/25'); // ввод срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // ввод CVV
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('german dolnikov'); // ввод имени
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // клик Оплатить
        cy.get('.style_1_base_input').type('56456'); // ввод кода подтверждения
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // клик Оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // проверка наличия сообщения об успешной оплате
    })
})