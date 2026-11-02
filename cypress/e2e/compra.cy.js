import LoginPage from '../support/pages/login.page';
import CheckoutPage from '../support/pages/checkout.page';

describe('Suíte de Regressão - E-commerce Sauce Demo', () => {
  let dados;

  beforeEach(() => {
    cy.fixture('dados').then((fData) => {
      dados = fData;
    });
  });

  it('Deve realizar um fluxo de compra com sucesso de ponta a ponta', () => {
    // Usa o comando customizado de login global
    cy.logar(dados.usuarioValido, dados.senhaValida);
    
    // Valida entrada no inventário
    cy.url().should('include', '/inventory.html');

    // Executa fluxo de compra
    CheckoutPage.adicionarProdutoAoCarrinho();
    CheckoutPage.irParaCarrinho();
    CheckoutPage.preencherCheckout(dados.primeiroNome, dados.sobrenome, dados.cep);
    CheckoutPage.finalizarCompra();

    // Validação final
    CheckoutPage.validarSucesso();
  });

  it('Não deve permitir login com usuário bloqueado', () => {
    LoginPage.visitar();
    LoginPage.preencherLogin(dados.usuarioBloqueado, dados.senhaValida);
    LoginPage.clicarLogin();
    LoginPage.verificarErro('Sorry, this user has been locked out');
  });
});