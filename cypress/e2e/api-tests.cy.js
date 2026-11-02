describe('Testes de API - Validação de Contrato e Status', () => {

  const baseUrlApi = 'https://jsonplaceholder.typicode.com';

  it('Deve listar usuários com sucesso (GET 200) e validar o contrato', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrlApi}/users`
    }).then((response) => {
      // 1. Valida o Status Code (sucesso)
      expect(response.status).to.eq(200);

      // 2. Valida que a API retornou uma lista de usuários
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);

      // 3. Valida os dados do primeiro usuário da lista (Contrato/Payload)
      expect(response.body[0]).to.have.property('id', 1);
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('email');
    });
  });

  it('Deve cadastrar um novo registro com sucesso (POST 201)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrlApi}/posts`,
      body: {
        title: 'Teste de Automacao QA',
        body: 'Criando post via Cypress cy.request',
        userId: 1
      }
    }).then((response) => {
      // O padrão para criação (POST) bem-sucedida geralmente é 201 Created
      expect(response.status).to.eq(201);
      
      // Valida se o servidor devolveu o objeto criado com um ID gerado
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('Teste de Automacao QA');
    });
  });

  it('Deve validar erro ao tentar buscar um recurso inexistente (GET 404)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrlApi}/posts/999999`,
      failOnStatusCode: false // Diz pro Cypress não quebrar o teste de cara ao receber um erro 404
    }).then((response) => {
      // Valida que o sistema respondeu corretamente com código 404 (Not Found)
      expect(response.status).to.eq(404);
    });
  });

});