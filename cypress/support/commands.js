import LoginPage from './pages/login.page';

// Comando customizado para fazer login de forma rápida em qualquer teste
Cypress.Commands.add('logar', (usuario, senha) => {
  LoginPage.visitar();
  LoginPage.preencherLogin(usuario, senha);
  LoginPage.clicarLogin();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ... (pode manter ou apagar os comentários abaixo se quiser limpar o arquivo)



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

