# 🚀 Automação de Testes E2E e API - Cypress & JavaScript

Projeto de automação de testes desenvolvido para validar fluxos de interface de ponta a ponta (E2E) e testes de contrato/serviço (API), utilizando **Cypress** com **JavaScript** e aplicando o design pattern **Page Object Model (POM)** para garantir uma arquitetura limpa, escalável e de fácil manutenção.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **[Cypress](https://www.cypress.io/)** - Framework moderno de automação de testes E2E e API.
* **JavaScript (ES6+)** - Linguagem de programação principal.
* **Page Object Model (POM)** - Design pattern para separação de responsabilidades e reutilização de código.
* **GitHub Actions** - Pipeline de Integração Contínua (CI/CD) para execução automatizada em nuvem.
* **Node.js** - Ambiente de execução JavaScript.

---

## 📂 Estrutura do Projeto

```text
automacao-qa-cypress-saucedemo/
├── .github/
│   └── workflows/
│       └── main.yml            # Pipeline de CI/CD (GitHub Actions)
├── cypress/
│   ├── e2e/
│   │   ├── api/                # Testes de API (Contratos e requisições)
│   │   │   └── api-tests.cy.js
│   │   └── saucedemo.cy.js     # Testes E2E de interface (Sauce Demo)
│   ├── support/
│   │   ├── pages/              # Page Objects (Mapeamento de elementos e ações)
│   │   │   ├── LoginPage.js
│   │   │   ├── InventoryPage.js
│   │   │   ├── CartPage.js
│   │   │   └── CheckoutPage.js
│   │   ├── commands.js         # Comandos customizados do Cypress
│   │   └── e-supp.js           # Configurações de suporte global
├── cypress.config.js           # Configurações globais do Cypress
├── package.json                # Dependências e scripts do projeto
└── README.md
```

---

## 📋 Funcionalidades e Cenários Testados

1. **Testes de Interface (E2E) - Sauce Demo:**
   * **Fluxo de Compra Completo:** Login com sucesso, seleção de produtos na vitrine, validação dos itens no carrinho, preenchimento de dados de entrega no checkout, conclusão do pedido e validação da mensagem de sucesso (`THANK YOU FOR YOUR ORDER`).
   * **Validação de Cenários Negativos / Restrições:** Teste de bloqueio de acesso utilizando o usuário `locked_out_user`, validando a mensagem de erro correta exibida na tela.

2. **Testes de API:**
   * **Validação de Contratos e Status Codes:** Utilização de requisições HTTP (`cy.request`) para validar endpoints (GET, POST), verificação de payloads de resposta, tempos de resposta e validação de rotas inexistentes (Status 404).

---

## ⚙️ Pré-requisitos e Instalação (Passo a Passo)

Certifique-se de ter instalado em sua máquina o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o Git. Em seguida, abra o terminal na pasta desejada e siga os comandos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/flvbinho/automacao-qa-cypress-saucedemo.git](https://github.com/flvbinho/automacao-qa-cypress-saucedemo.git)
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd automacao-qa-cypress-saucedemo
   ```

3. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

---

## 🧪 Como Executar os Testes Passo a Passo

Com o ambiente configurado, você pode rodar os testes de diferentes maneiras:

* **Abrir a Interface Gráfica interativa do Cypress (Test Runner - Ideal para desenvolvimento e depuração):**
  ```bash
  npx cypress open
  ```
  *(Uma janela do Cypress se abrirá. Basta clicar em E2E Testing e escolher o navegador e o arquivo de teste desejado).*

* **Executar todos os testes em modo Headless (em segundo plano, padrão de linha de comando):**
  ```bash
  npx cypress run
  ```

* **Executar os testes em um navegador específico (ex: Chrome):**
  ```bash
  npx cypress run --browser chrome
  ```

* **Executar apenas um arquivo de teste específico:**
  ```bash
  npx cypress run --spec "cypress/e2e/saucedemo.cy.js"
  ```

---

## 🤖 CI/CD (GitHub Actions)

O projeto possui Integração Contínua configurada na pasta `.github/workflows/main.yml`. Toda vez que um novo `git push` é realizado na branch principal, o GitHub Actions inicializa um ambiente virtual limpo, instala as dependências, executa toda a suíte de testes do Cypress automaticamente e reporta o status da build.

---

## 👨‍💻 Autor
**Flávio Ferreira Martins**  
*QA Analyst*
