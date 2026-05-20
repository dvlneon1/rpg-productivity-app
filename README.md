# RPG Productivity App

API backend inspirada em sistemas de RPG para transformar produtividade em progressão de personagem.

O usuário pode criar tarefas, completar desafios, ganhar XP, subir de nível e evoluir atributos pessoais.

---

# Funcionalidades

## Autenticação

- Cadastro de usuários
- Login com JWT
- Senhas protegidas com bcrypt
- Rotas protegidas por middleware
- Autenticação via Bearer Token

---

## Sistema de Tasks

- Criar tarefas
- Listar tarefas do usuário autenticado
- Completar tarefas
- Deletar tarefas
- Sistema de dificuldade
- Recompensa de XP

---

## Sistema RPG

- Ganho de XP
- Sistema de níveis dinâmico
- XP remanescente após level up
- Evolução de atributos

Atributos disponíveis:

- discipline
- knowledge
- mentality
- body
- social
- finances

---

# Segurança

A API possui:

- JWT Authentication
- Hash de senhas com bcrypt
- Rotas protegidas
- Validação de ownership
- Isolamento de dados por usuário
- Validação de entrada de dados

Cada usuário pode acessar apenas suas próprias tasks.

---

# Validações

Atualmente a API valida:

- título da task
- dificuldade
- categoria
- usuário autenticado
- ownership da task

Exemplos de validação:

- título vazio
- dificuldade inválida
- categoria inválida
- tentativa de acessar task de outro usuário

---

# Tecnologias Utilizadas

- Node.js
- Express.js
- Firebase Firestore
- bcrypt
- jsonwebtoken
- dotenv

---

# Estrutura do Projeto

```bash
src/
├── config/
│   └── firebase.js
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── userController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── userRoutes.js
│
└── server.js
```

---

# Rotas da API

## Auth

| Método | Rota | Descrição |
|---|---|---|
| POST | /auth/register | Cadastro de usuário |
| POST | /auth/login | Login do usuário |

---

## Users

| Método | Rota | Descrição |
|---|---|---|
| GET | /users/profile | Perfil do usuário autenticado |

---

## Tasks

| Método | Rota | Descrição |
|---|---|---|
| POST | /tasks | Criar task |
| GET | /tasks | Listar tasks do usuário |
| PATCH | /tasks/:id/completed | Completar task |
| DELETE | /tasks/:id | Deletar task |

---

# Fluxo de Autenticação

## Cadastro

```http
POST /auth/register
```

Body:

```json
{
  "email": "user@email.com",
  "username": "Fernando",
  "password": "123456"
}
```

---

## Login

```http
POST /auth/login
```

Body:

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "JWT_TOKEN"
}
```

---

# Rotas Protegidas

As rotas protegidas utilizam:

```http
Authorization: Bearer TOKEN
```

Exemplo:

```http
GET /users/profile
```

---

# Sistema de XP

Recompensas:

| Dificuldade | XP |
|---|---|
| easy | 10 XP |
| medium | 25 XP |
| hard | 1000 XP |

---

# Sistema de Level

A progressão de nível é dinâmica.

Exemplo:

| Level | XP necessário |
|---|---|
| 1 → 2 | 100 XP |
| 2 → 3 | 200 XP |
| 3 → 4 | 300 XP |

Fórmula:

```js
xpToNextLevel = level * 100
```

---

# Instalação

## Clonar projeto

```bash
git clone https://github.com/dvlneon1/rpg-productivity-app.git
```

---

## Instalar dependências

```bash
npm install
```

---

## Criar arquivo .env

```env
JWT_SECRET=sua_chave_secreta
```

---

## Rodar projeto

```bash
npm run dev
```

---

# Objetivos do Projeto

Este projeto foi criado para praticar:

- Backend
- APIs REST
- JWT
- Middleware
- Firestore
- Segurança
- Arquitetura backend
- Sistemas multiusuário
- Lógica de RPG

---

# Futuras Funcionalidades

- Sistema de achievements
- Daily quests
- Leaderboard
- Dashboard de estatísticas
- Inventário
- Sistema de equipamentos
- Frontend da aplicação
- Sistema de guildas

---

# Autor

Fernando César Barbosa Tomain Filho

---

# Licença

Projeto desenvolvido para estudos e portfólio.

