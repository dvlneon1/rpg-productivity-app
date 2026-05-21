# RPG Productivity App

Aplicação backend inspirada em sistemas de RPG para produtividade pessoal.

O usuário pode criar tarefas, completar desafios e ganhar XP para evoluir seu personagem conforme realiza atividades do dia a dia.

---

# Tecnologias

- Node.js
- Express
- Firebase Firestore
- JWT
- Bcrypt
- Git/GitHub

---

# Funcionalidades

## Autenticação

- Cadastro de usuário
- Login com JWT
- Rotas protegidas
- Middleware de autenticação

---

## Sistema de Tasks

- Criar task
- Listar tasks
- Atualizar task
- Deletar task
- Completar task

---

## Sistema RPG

Cada task possui:
- dificuldade
- categoria
- recompensa de XP

Ao completar tarefas:
- o usuário ganha XP
- sobe de nível
- evolui atributos

---

# Categorias

- discipline
- knowledge
- mentality
- body
- social
- finances

---

# Dificuldades

| Dificuldade | XP |
|---|---|
| easy | 10 XP |
| medium | 25 XP |
| hard | 1000 XP |

---

# Arquitetura

Estrutura atual do backend:

```bash
src/
├── config/
├── controllers/
├── helpers/
├── middlewares/
├── routes/
└── server.js
```

---

# Middlewares

## authMiddleware

Responsável por:
- validar JWT
- proteger rotas
- identificar usuário autenticado

---

## taskValidationMiddleware

Responsável por:
- validar criação de tasks
- validar atualização de tasks

---

# Helpers

## taskHelpers

Funções auxiliares reutilizáveis:
- getTaskById
- validateTaskOwner

---

# Filtros

A rota de listagem de tasks suporta filtros.

## Exemplos

Buscar tasks difíceis:

```http
GET /tasks?difficulty=hard
```

Buscar tasks completas:

```http
GET /tasks?completed=true
```

Combinar filtros:

```http
GET /tasks?difficulty=hard&completed=false
```

---

# Rotas

## Auth

### Cadastro

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

---

## Usuário

### Perfil

```http
GET /users/profile
```

---

## Tasks

### Criar task

```http
POST /tasks
```

### Buscar tasks

```http
GET /tasks
```

### Atualizar task

```http
PATCH /tasks/:id
```

### Completar task

```http
PATCH /tasks/:id/completed
```

### Deletar task

```http
DELETE /tasks/:id
```

---

# Segurança

- Senhas criptografadas com bcrypt
- Autenticação JWT
- Ownership validation
- Rotas protegidas

---

# Próximos passos

- Frontend React
- Dashboard
- Sistema de streak
- Daily quests
- Estatísticas
- Paginação
- Ranking de usuários

---

# Status do Projeto

Backend funcional em desenvolvimento contínuo.

Versão atual:

```text
v0.1.0
```