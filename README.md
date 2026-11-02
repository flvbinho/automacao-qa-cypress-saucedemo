# 🚀 Projeto de Automação de Testes E2E e API (Sauce Demo)

[![Testes E2E - Cypress](https://github.com/flvbinho/automacao-qa-saucedemo/actions/workflows/pipeline.yml/badge.svg)](https://github.com/flvbinho/automacao-qa-saucedemo/actions/workflows/pipeline.yml)

Este repositório contém uma suíte de automação de testes robusta desenvolvida para cobrir fluxos de interface (E2E) e validações de contrato de API, seguindo padrões de mercado e boas práticas de Integração Contínua (CI/CD).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
* **Cypress** (Automação E2E e requisições de API via `cy.request`)
* **JavaScript (ES6+)**
* **Page Object Model (POM)** (Arquitetura limpa e reutilizável)
* **GitHub Actions** (Pipeline de CI/CD em nuvem)
* **Node.js**

---

## 📋 Funcionalidades Testadas
1. **Testes de Interface (E2E):**
   - Fluxo de compra completo de ponta a ponta no e-commerce [Sauce Demo](https://www.saucedemo.com).
   - Validação de restrição de acesso para usuários bloqueados (`locked_out_user`).
2. **Testes de API:**
   - Validação de contratos, payloads e status codes (`GET`, `POST`, `404`).
   - Simulação de cenários de integração corporativa.

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### Instalação
1. Clone este repositório:
   ```bash
   git clone [https://github.com/flvbinho/automacao-qa-saucedemo.git](https://github.com/flvbinho/automacao-qa-saucedemo.git)
