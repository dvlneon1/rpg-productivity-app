# Changelog

Todas as mudanças importantes do projeto serão documentadas neste arquivo.

O projeto segue evolução contínua baseada em:
- arquitetura backend
- segurança
- autenticação
- sistemas multiusuário
- APIs REST
- lógica de RPG

---

# [0.3.0] - 2026-05-20

## Added

### Validation Layer
- Validação de título da task
- Validação de dificuldade
- Validação de categoria
- Sanitização de strings utilizando `trim()`

### Ownership Validation
- Usuários agora só podem acessar suas próprias tasks
- Proteção contra acesso cruzado entre usuários

### DELETE Task
- Implementação da rota:
  - DELETE `/tasks/:id`

### CRUD Completo
- Create
- Read
- Update
- Delete

### Segurança
- Proteção contra exclusão indevida
- Proteção contra completar task de outro usuário

### Documentação
- README.md atualizado
- CHANGELOG.md criado

---

## Changed

### Sistema de Tasks
- GET `/tasks` agora retorna apenas tasks do usuário autenticado

### Arquitetura
- Melhor separação entre autenticação e autorização

---

## Fixed

### Segurança
- Correção de falha onde usuários conseguiam acessar tasks de outros usuários

### Firestore
- Correção de queries utilizando `.where()`

### Middleware
- Correção de importação do `authMiddleware`

---

# [0.2.0] - 2026-05-18

## Added

### Sistema de Autenticação
- Cadastro de usuários
- Login de usuários
- JWT Authentication
- Middleware de autenticação
- Rotas protegidas

### Segurança
- Hash de senha com bcrypt
- Verificação de senha utilizando compare()

### Sistema Multiusuário
- Vinculação de tasks ao usuário autenticado
- Campo `userId` nas tasks

### Perfil de Usuário
- GET `/users/profile`

---

## Changed

### Tasks
- Tasks passaram a ser vinculadas ao usuário autenticado

---

## Fixed

### JWT
- Correção de `JWT_SECRET`

### Middleware
- Correção de `authorization header`

### Login
- Correção da lógica de comparação de senha

### Firestore
- Correção de uso de `.doc()` e `.get()`

---

# [0.1.0] - 2026-05-17

## Added

### Estrutura Inicial
- Configuração do Node.js
- Configuração do Express.js
- Configuração do Firebase Firestore
- Organização inicial do projeto

### Sistema RPG
- Sistema de XP
- Sistema de level
- XP remanescente
- Progressão dinâmica

### Sistema de Tasks
- Criação de tasks
- Completar tasks
- Recompensa de XP
- Sistema de dificuldade

### Categorias RPG
- discipline
- knowledge
- mentality
- body
- social
- finances

---

## Fixed

### Sistema de XP
- Correção da lógica de XP restante
- Correção de múltiplos level ups
- Correção de atualização dinâmica do XP necessário