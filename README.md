# API REST de Transações 💸

Esta API REST foi desenvolvida para gerenciar transações financeiras, permitindo que usuários criem, visualizem e obtenham um resumo de suas movimentações. O projeto utiliza **Node.js** com **Fastify**, garantindo alta performance e escalabilidade.

## 🚀 Funcionalidades

- **Criar Transação:** O usuário pode registrar uma nova transação do tipo **crédito** ou **débito**.
- **Listar Transações:** Exibe todas as transações realizadas pelo usuário.
- **Visualizar Transação Única:** Permite consultar detalhes de uma transação específica.
- **Resumo da Conta:** Gera um resumo com o saldo total considerando todas as transações.

## 📊 Regras de Negócio

- **Tipos de Transação:**
  - **Crédito:** Soma o valor ao saldo total.
  - **Débito:** Subtrai o valor do saldo total.
- **Segurança e Autorização:**
  - O usuário só pode visualizar transações que ele mesmo criou.
  - Identificação do usuário entre as requisições para garantir a integridade dos dados.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Fastify**: Framework web focado em desempenho.
- **Criptografia**: Para segurança de dados sensíveis.
- **Testes Automatizados**: Garantia de qualidade e confiabilidade da API.
- **Render**: Plataforma para deploy da aplicação.

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/lumoura0/api_rest.git

# Acesse a pasta do projeto
cd api_rest

# Instale as dependências
npm install

# Inicie o servidor
dev
```

A API estará disponível em `http://localhost:3333` (ou na porta configurada).

## ✅ Testes

```bash
# Para rodar os testes automatizados
npm run test
```

## 🌍 Deploy

A API está hospedada na Render, oferecendo fácil escalabilidade e confiabilidade para produção.

---

**Desenvolvido por Luis Fernando 🚀**
