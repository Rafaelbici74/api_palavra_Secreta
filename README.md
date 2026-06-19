# API Palavra Secreta

Uma API MVC robusta e segura para autenticação e gerenciamento de usuários, construída com Express.js.

## 🎯 Sobre o Projeto

Esta é uma API REST que implementa um sistema de autenticação completo com as melhores práticas de segurança, incluindo criptografia de senhas com bcrypt e autenticação com JWT (JSON Web Tokens).

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## 🚀 Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone <seu-repositorio>
cd api_palavra_Secreta
```

### 2. Instalar dependências

```bash
cd api-mvc
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do diretório `api-mvc`:

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=sua_chave_secreta_aqui
DATABASE_URL=sua_url_de_banco_dados
```

## 📦 Dependências

- **express**: Framework web rápido e minimalista
- **bcrypt**: Criptografia de senhas segura
- **jsonwebtoken**: Geração e validação de JWT
- **cors**: Middleware para compartilhamento de recursos (CORS)
- **dotenv**: Gerenciamento de variáveis de ambiente

### Dependências de Desenvolvimento

- **nodemon**: Reinicia automaticamente o servidor durante o desenvolvimento

## 🏃 Como Executar

### Ambiente de Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000` com reinicialização automática.

### Ambiente de Produção

```bash
npm start
```

## 📁 Estrutura do Projeto

```
api-mvc/
├── server.js              # Arquivo principal da aplicação
├── package.json           # Dependências e scripts
├── controllers/           # Lógica de negócio
│   └── authController.js
├── middlewares/           # Middlewares customizados
│   └── authMiddleware.js
├── routes/                # Definição de rotas
│   └── authRoutes.js
└── .env                   # Variáveis de ambiente (não incluído no repositório)
```

## 🔐 Recursos de Segurança

- ✅ Criptografia de senhas com bcrypt
- ✅ Autenticação com JWT
- ✅ Middleware de autenticação customizado
- ✅ Proteção contra CORS não autorizado
- ✅ Variáveis de ambiente para dados sensíveis

## 🛣️ Rotas Disponíveis

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/auth/register` | Registrar novo usuário |
| POST | `/auth/login` | Fazer login |
| GET | `/auth/profile` | Obter perfil do usuário (requer autenticação) |
| POST | `/auth/logout` | Fazer logout |

## 💡 Como Usar

### 1. Registrar um novo usuário

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@example.com","password":"senha123"}'
```

### 2. Fazer login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@example.com","password":"senha123"}'
```

### 3. Acessar rota protegida

```bash
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer SEU_TOKEN_JWT"
```

## 🔧 Desenvolvimento

### Estrutura de Controllers

O arquivo `api-mvc/controllers/authController.js` contém a lógica principal de autenticação.

### Estrutura de Middlewares

O arquivo `api-mvc/middlewares/authMiddleware.js` implementa a validação de JWT.

### Estrutura de Rotas

O arquivo `api-mvc/routes/authRoutes.js` define todas as endpoints disponíveis.

## 📝 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `PORT` | Porta do servidor | `3000` |
| `NODE_ENV` | Ambiente | `development` ou `production` |
| `JWT_SECRET` | Chave secreta para JWT | `sua_chave_muito_segura_aqui` |
| `DATABASE_URL` | URL do banco de dados | `mongodb://localhost:27017/db` |

## 🐛 Troubleshooting

**Erro: Port already in use**
- Mude a porta no arquivo `.env`
- Ou finalize o processo usando a porta: `netstat -ano | findstr :3000` (Windows)

**Erro: Cannot find module 'express'**
- Execute `npm install` novamente

**JWT inválido**
- Certifique-se de que o token está sendo enviado corretamente no header
- Verifique se a `JWT_SECRET` está configurada

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request