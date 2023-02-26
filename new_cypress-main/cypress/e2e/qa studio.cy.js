
describe('Тестирование покупки QA Studio (кол-во с кликом)', function () {
    
    it('Позитивная Авторизация', function () {
        cy.visit(' https://testqastudio.me/');
        cy.get('.tab-new').click()
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click()
        cy.get('.home > span').click()
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()
        cy.wait(2000)
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Максим');
        cy.get('#billing_last_name').type('Башкиров');
        cy.get('#billing_address_1').type('Автотестировщиков 1');
        cy.get('#billing_city').type('Нью-Йорк');
        cy.get('#billing_state').type('Манхэттенская область');
        cy.get('#billing_postcode').type('111111');
        cy.get('#billing_phone').type('11111111');
        cy.get('#billing_email').type('qastudio@mail.ru');
        cy.get('#order_comments').type('Арина привет)');
        cy.get('#place_order').click();
        cy.wait(2000)
        cy.contains('Ваш заказ принят.').should('be.visible')

    })
})
