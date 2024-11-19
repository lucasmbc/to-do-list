# TO-DO-LIST API

Esta é uma API para gerenciar tarefas, permitindo a criação, recuperação, atualização e exclusão de tarefas. A API foi construída com Node.js e Express.

## :rocket: Recursos

### Rotas de Tarefas

-   POST `/tasks` - Criar uma nova tarefa (autenticada)
-   GET `/tasks` - Listar todas as tarefas
-   PUT `/:taskId` - Atualizar uma tarefa pelo ID
-   DELETE `/:taskId` - Remover uma tarefa pelo ID

### Rotas de Registro

-   POST `/register` - Cria um novo usuário

### Rotas de Login

-   POST `/login` - Realiza o login de um usuário

## :hammer_and_wrench: Configuração e Uso

### Pré-requisitos

-   Node.js (versão 14 ou superior)
-   Gerenciador de pacotes `npm` ou `yarn`

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/lucasmbc/to-do-list.git
    cd to-do-list
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`.

### Executando o servidor

```bash
npm start
```

A API será iniciada em http://localhost:3000 (ou na porta configurada).

## :link: Rotas da API

### Registro de Usuário

-   Rota: `POST /register`
-   Body:
    ```json
    {
        "nome": "nome do usuário",
        "email": "usuario@email.com",
        "senha": "senha"
    }
    ```
-   Response:
    ```json
    {
        "id": 1,
        "nome": "nome do usuário",
        "email": "usuario@email.com"
    }
    ```

### Login de Usuário

-   Rota: `POST /login`
-   Body:
    ```json
    {
        "email": "foguinho@gmail.com",
        "senha": "senha"
    }
    ```
-   Response:
    ```json
    {
        "token": "jwt-token"
    }
    ```

### Criar Tarefa

-   Rota: `POST /tasks`
-   Cabeçalhos:
    -   `Authorization`: `Bearer <token>`
-   Body:
    ```json
    {
        "title": "Nome da tarefa",
        "usuarioId": 1
    }
    ```
-   Response:
    ```json
    {
        "status": "pendente",
        "id": id,
        "titulo": "titulo",
        "usuarioId": usuarioId
    }
    ```

### Listar Tarefas

-   Rota: `GET /tasks`
-   Response:
    ```json
    {
        "id": id,
    	"titulo": "titulo",
    	"descricao": null,
    	"status": "status",
    	"usuarioId": usuarioId
    }
    ```

### Atualizar Tarefa

-   Rota: `PUT /:taskId`
-   Parâmetros:
    -   `taskId`: ID da tarefa
-   Body:
    ```json
    {
        "titulo": "titulo da tarefa",
        "status": "status da tarefa"
    }
    ```
-   Response:
    ```json
    {
        "titulo": "titulo da tarefa",
        "status": "status da tarefa"
    }
    ```

### Remover Tarefa

-   Rota: `DELETE /:taskId`
-   Parâmetros:
    -   `taskId`: ID da tarefa

## :gear: Middleware

A rota de criação de tarefas usa um middleware de autenticação (authMiddleware).
