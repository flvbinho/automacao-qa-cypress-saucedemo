class LoginPage {
  visitar() {
    cy.visit('https://www.saucedemo.com/');
  }

  preencherLogin(usuario, senha) {
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(senha);
  }

  clicarLogin() {
    cy.get('#login-button').click();
  }

  verificarErro(mensagem) {
    cy.get('[data-test="error"]').should('contain', mensagem);
  }
}

export default new LoginPage();