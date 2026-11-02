class CheckoutPage {
  adicionarProdutoAoCarrinho() {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click();
  }

  preencherCheckout(nome, sobrenome, cep) {
    cy.get('#checkout').click();
    cy.get('#first-name').type(nome);
    cy.get('#last-name').type(sobrenome);
    cy.get('#postal-code').type(cep);
    cy.get('#continue').click();
  }

  finalizarCompra() {
    cy.get('#finish').click();
  }

  validarSucesso() {
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  }
}

export default new CheckoutPage();