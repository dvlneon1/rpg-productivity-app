# Changelog

Todas as mudanças importantes do projeto serão documentadas aqui.

---

# [0.1.0] - 2026-05-21

## Adicionado

### Autenticação
- Cadastro de usuários
- Login com JWT
- Middleware de autenticação
- Proteção de rotas

---

### Usuários
- Sistema de perfil
- Busca de perfil autenticado

---

### Tasks
- Criação de tasks
- Listagem de tasks
- Atualização de tasks
- Exclusão de tasks
- Completar tasks

---

### Sistema RPG
- Sistema de XP
- Sistema de level
- Recompensa de XP baseada em dificuldade
- Evolução de atributos por categoria

---

### Middlewares
- authMiddleware
- validateCreateTask
- validateUpdateTask

---

### Helpers
- getTaskById
- validateTaskOwner

---

### Filtros
- Filtro por dificuldade
- Filtro por status completed
- Filtros combinados

---

### Segurança
- Senhas criptografadas com bcrypt
- Autenticação JWT
- Ownership validation
- Rotas protegidas

---

### Arquitetura
- Separação de controllers
- Separação de middlewares
- Separação de helpers
- Rotas organizadas
- Refatoração de controllers

---

### Git/GitHub
- Criação da branch dev
- Estrutura inicial de versionamento
- Organização do fluxo de desenvolvimento

---

## Melhorias

- Refatoração do createTask
- Refatoração das validações
- Refatoração da lógica de ownership
- Organização de responsabilidades por camada

---

## Próximos passos

- Frontend React
- Dashboard do usuário
- Sistema de streak
- Estatísticas
- Paginação
- Ranking de usuários
- Deploygit commit -m "docs: update README and CHANGELOG for v0.1.0"