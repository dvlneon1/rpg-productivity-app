# RPG Productivity App 🎮

Um sistema de produtividade gamificado inspirado em RPGs, criado para transformar tarefas diárias em progressão de personagem.

O projeto nasceu com dois objetivos principais:

- Evolução pessoal através de gamificação.
- Evolução técnica como desenvolvedor Full Stack.

Cada tarefa completada gera:
- XP
- Progressão
- Evolução de atributos
- Sistema de level
- Crescimento do personagem

---

# 🚀 Tecnologias Utilizadas

## Backend
- Node.js
- Express
- JavaScript

## Banco de Dados
- Firebase Firestore

## Bibliotecas
- dotenv
- firebase-admin

---

# 📚 Objetivos de Aprendizado

Este projeto está sendo utilizado para estudar:

- Backend com Node.js
- APIs REST
- Firestore
- Arquitetura Backend
- Modelagem de dados
- Regras de negócio
- Sistemas de progressão
- Estruturação de projetos
- Versionamento com Git/GitHub
- Futuramente Frontend Full Stack

---

# 🧠 Conceito do Sistema

O usuário possui um personagem.

Ao completar tarefas da vida real:

- ganha XP
- sobe de nível
- evolui atributos
- melhora áreas da vida

A ideia é transformar disciplina e evolução pessoal em um RPG.

---

# 🏗️ Estrutura Atual do Projeto

```bash
src/
│
├── config/
│   └── firebase.js
│
├── controllers/
│   ├── taskController.js
│   └── userController.js
│
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
│
└── app.js
```

---

# 🔥 Funcionalidades Atuais

# 👤 Usuários

✅ Criar usuário

✅ Sistema de level

✅ Sistema de XP

✅ Atributos RPG

### Estrutura atual do usuário

```js
{
  username,

  level,
  xp,

  discipline,
  knowledge,
  mentality,
  body,
  social,
  finances,

  createdAt
}
```

---

# ✅ Tasks

✅ Criar task

✅ Buscar tasks

✅ Completar task

✅ Sistema de recompensa XP

✅ Task vinculada ao usuário

✅ Sistema anti duplicação de recompensa

### Estrutura atual da task

```js
{
  title,
  difficulty,
  category,
  userId,

  xpReward,
  completed,

  createdAt
}
```

---

# ⚔️ Sistema de Progressão

## XP por dificuldade

| Dificuldade | XP |
|---|---|
| easy | 10 XP |
| medium | 25 XP |
| hard | 100 XP |

---

## Sistema de level

Atualmente:

```text
100 XP = Level Up
```

Quando o usuário alcança 100 XP:

- sobe de nível
- XP excedente permanece

---

# 📦 Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/rpg-backend.git
```

---

## 2. Entre na pasta do projeto

```bash
cd rpg-backend
```

---

## 3. Instale as dependências

```bash
npm install
```

---

# 🔐 Configuração Firebase

## Crie um arquivo `.env`

```env
FIREBASE_KEY_PATH=./serviceAccountKey.json
```

---

## Adicione sua chave Firebase

Baixe sua chave privada no Firebase Console e coloque na raiz do projeto.

Exemplo:

```bash
serviceAccountKey.json
```

⚠️ Nunca envie sua chave Firebase para o GitHub.

---

# 🚫 .gitignore

Crie um arquivo:

```bash
.gitignore
```

Conteúdo:

```gitignore
node_modules
.env
serviceAccountKey.json
```

---

# ▶️ Executando o Projeto

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

# 📌 Rotas da API

# 👤 Usuários

## Criar usuário

```http
POST /users
```

### Body

```json
{
  "username": "Fernando"
}
```

---

# ✅ Tasks

## Criar task

```http
POST /tasks
```

### Body

```json
{
  "title": "Estudar Node.js",
  "difficulty": "medium",
  "category": "knowledge",
  "userId": "ID_DO_USUARIO"
}
```

---

## Buscar tasks

```http
GET /tasks
```

---

## Completar task

```http
PATCH /tasks/:id/complete
```

---

# 🧠 Categorias do Sistema

As tasks possuem categorias ligadas à evolução do personagem.

## Categorias atuais

- discipline
- knowledge
- mentality
- body
- social
- finances

Futuramente essas categorias afetarão atributos específicos do usuário.

---

# 🏛️ Arquitetura Atual

O projeto utiliza separação por responsabilidades:

| Camada | Responsabilidade |
|---|---|
| config | conexão com Firebase |
| routes | endpoints da API |
| controllers | lógica de negócio |
| firestore | persistência de dados |

---

# 🧪 Fluxo Atual do Sistema

```text
Usuário cria task
↓
Task recebe userId
↓
Usuário completa task
↓
Sistema adiciona XP
↓
Sistema verifica level up
↓
Usuário evolui
```

---

# 🛠️ Próximas Features

## Backend

- JWT Authentication
- Middleware de autenticação
- Sistema de streak diária
- Sistema de conquistas
- Inventário
- Loja RPG
- Equipamentos
- Sistema de habilidades
- Boss semanal
- Sistema de ranking
- Sistema de missões
- Estatísticas do usuário
- Sistema de achievements

---

## Frontend

- React
- Dashboard
- Avatar customizável
- Interface minimalista
- Sistema visual de progressão
- Barras de XP
- Inventário visual
- Marketplace
- Mobile responsiveness

---

# 🎯 Visão do Projeto

O objetivo final é criar:

- um sistema extremamente gamificado
- produtividade com progressão real
- evolução pessoal através de RPG
- uma aplicação Full Stack completa

---

# 📖 Aprendizados Durante o Projeto

Durante o desenvolvimento já foram estudados:

✅ CRUD

✅ Rotas REST

✅ Controllers

✅ Firestore

✅ Async/Await

✅ Regras de negócio

✅ Relacionamento entre entidades

✅ Sistema de progressão

✅ Persistência de dados

✅ Debugging

✅ Git/GitHub

---

# 👨‍💻 Desenvolvedor

Projeto criado por Fernando César Barbosa Tomain Filho.

---

# 📌 Status do Projeto

🚧 Em desenvolvimento ativo.

O projeto continuará evoluindo conforme os estudos avançam.

