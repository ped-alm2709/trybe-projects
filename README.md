# Boas vindas ao repositório do API de Blogs!

## O que deverá ser desenvolvido

Irei arquiteturar, desenvolver uma API de um CRUD posts de blog (com o sequelize). Começando pela API, irei desenvolver alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados. Lembre-se de aplicar os princípios SOLID!

Primeiro, eu irei criar uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de Categorias para seus Posts e por fim a tabela de Posts será seu foco, guardando todas as informações dos posts realizados na plataforma. Essa é apenas uma recomendação!

---

## Desenvolvimento

Desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utlização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
 
---
# Requisitos do projeto:

## Antes de começar:

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-011-project-blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

#### Variável JWT (opcional):

`JWT_SECRET`

**Também poderá ser utilizada esta variável de ambiente para o SECRET do JWT**

## Lista de Requisitos:

### 1 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- O campo `displayName` deverá ser uma string com no mínimo de 8 caracteres;

- O campo `email` será considerado válido se tiver o formato `<prefixo>@<domínio>` e se for único. Ele é obrigatório.

- A senha deverá conter 6 caracteres. Ela é obrigatória.

- Caso exista uma pessoa com o mesmo email na base, deve-se retornar o seguinte erro:

  ```json
  {
    "message": "User already registered"
  }
  ```

- Caso contrário, retornar a mesma resposta do endpoint de `/login`, um token `JWT`:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_

**[Será validado que é possível cadastrar um usuário com sucesso]**

Se o usuário for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

**[Será validado que não é possível cadastrar usuário com o campo `displayName` menor que 8 caracteres]**

Se o usuário tiver o campo "displayName" menor que 8 caracteres o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar usuário com o campo `email` com formato `email: rubinho`]**

Se o usuário tiver o campo "email" com o formato `email: rubinho` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar usuário com o campo `email` com formato `email: @gmail.com`]**

Se o usuário tiver o campo "email" com o formato `email: @gmail.com` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que o campo `email` é obrigatório]**

Se o usuário não tiver campo "email" o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar usuário com o campo `password` diferente de 6 caracteres]**

Se o usuário tiver o campo "password" menor ou maior que 6 caracteres o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que o campo `password` é obrigatório]**

Se o usuário não tiver campo "password" o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Validar que não é possível cadastrar um usuário com email já existente]**

Se o usuário cadastrar o campo "email" com um email que já existe, o resultado retornado deverá ser conforme exibido abaixo, com um status http `409`:

### 2 - Sua aplicação deve ter o endpoint POST `/login`

- O corpo da requisição deverá seguir o formato abaixo:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```

- Caso algum desses campos seja inválido ou não exista um usuário correspondente no banco de dados, retorne um código de status 400 com o corpo `{ message: "Invalid fields" }`.

- Caso esteja tudo certo com o login, a resposta deve ser um token `JWT`, no seguinte formato:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_

**[Será validado que é possível fazer login com sucesso]**

Se o login foi feito com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível fazer login sem o campo `email`]**

Se o login não tiver o campo "email" o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível fazer login sem o campo `password`]**

Se o login não tiver o campo "password" o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível fazer login com o campo `email` em branco]**

Se o login tiver o campo "email" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível fazer login com o campo `password` em branco]**

Se o login tiver o campo "password" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível fazer login com um usuário que não existe]**

Se o login for com usuário inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

### 3 - Sua aplicação deve ter o endpoint GET `/user`

- Deve listar todos os **Users** e retorná-los na seguinte estrutura:

  ```json
  [
    {
      "id": "401465483996",
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

**[Será validado que é possível listar todos os usuários]**

Ao listar usuários com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível listar usuários sem o token na requisição]**

Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível listar usuários com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 4 - Sua aplicação deve ter o endpoint GET `/user/:id`

#### Os seguintes pontos serão avaliados:

- Retorna os detalhes do usuário baseado no `id` da rota. Os dados devem ter o seguinte formato:

  ```json
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

**[Será validado que é possível listar um usuario específico com sucesso]**

Ao listar um usuário com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível listar um usuário inexistente]**

Se o usuário for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

**[Será validado que não é possível listar um determinado usuário sem o token na requisição]**

Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível listar um determinado usuário com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 5 - Sua aplicação deve ter o endpoint POST `/categories`

- Esse endpoint deve receber uma _Categoria_ no corpo da requisição e criá-la no banco. O corpo da requisição deve ter a seguinte estrutura:

 ```json
  {
    "name": "Inovação"
  }
  ```

- Caso a Categoria não contenha o `name` a API deve retornar um erro de `status 400`.

- A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

**[Será validado que é possível cadastrar uma categoria com sucesso]**

Se cadastrar uma categoria com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

**[Será validado que não é possível cadastrar uma categoria sem o campo name]**

Se ao tentar cadastrar uma categoria sem o campo name o resultado retornado deverá ser conformo exibido abaixo, com um status http 400:

**[Será validado que não é possível cadastrar uma determinada categoria com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível cadastrar uma determinada categoria sem o token na requisição]**

Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 6 - Sua aplicação deve ter o endpoint GET `/categories`

- Esse endpoint deve listar todas as Categorias e retorná-las na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
```

[Será validado que é possível listar todas as categoria com sucesso]

Se buscar todas as categorias com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 200:

**[Será validado que não é possível listar as categorias com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível cadastrar uma determinada categoria sem o token na requisição]**

Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 7 - Sua aplicação deve ter o endpoint POST `/post`

- Esse endpoint deve receber um _BlogPost_ no corpo da requisição e criá-lo no banco. O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

- Caso o post não contenha o `title`, `content` ou `categoryIds` a API deve retornar um erro de `status 400`.

- A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

**[Será validado que é possível cadastrar um blogpost com sucesso]**

Se cadastrar um blogpost com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

**[Será validado que não é possível cadastrar um blogpost sem o campo `title`]**

Se não conter o campo `title` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar um blogpost sem o campo `content`]**

Se não conter o campo `content` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar um blogpost sem o campo `categoryIds`]**

Se não conter o campo `categoryIds` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar um blogpost com uma `categoryIds` inexistente]**

Se o campo `categoryIds` tiver uma categoria inexistente, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não é possível cadastrar um blogpost sem o token]**

Se não conter o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível cadastrar um blogpost com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 8 - Sua aplicação deve ter o endpoint GET `/post`

- Esse endpoint deve listar todos os _BlogPosts_ e retorná-los na seguinte estrutura:

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

**[Será validado que é possível listar blogpost com sucesso]**

Se listar os blogpost com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível listar blogpost sem token]**

Se não conter o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível listar blogpost com token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 9 - Sua aplicação deve ter o endpoint GET `post/:id`

- Retorna um **BlogPost** com o `id` especificado. O retorno deve ter os seguinte formato:

```json
  {
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

**[Será validado que é possível listar um blogpost com sucesso]**

Se listar um blogpost com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível listar um blogpost sem token]**

Se não conter o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível listar um blogpost com token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível listar um blogpost inexistente]**

Se o id do post for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

### 10 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- O endpoint deve receber um **BlogPost** que irá sobrescrever o original com o `id` especificado na URL. Só deve ser permitido para o usuário que criou o **BlogPost**.

- A(s) categoria(s) do post **não** podem ser editadas, somente o `title` e `content`.

- O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

- Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código `status 401`.

- Caso uma requisição sem token seja recebida, deve-se retornar um código de `status 401`.

- Caso o post não contenha o `title` e/ou o `content` a API deve retornar um erro de `status 400`.

**[Será validado que é possível editar um blogpost com sucesso]**

Se editar um blogpost com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível editar as categorias de um blogpost]**

Só será possível editar o título ou o conteúdo de um post.

**[Será validado que não é possível editar um blogpost com outro usuário]**

Somente o usuário que criou o post poderá edita-lo.

**[Será validado que não possível editar um blogpost sem token]**

Se não conter o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não possível editar um blogpost com token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não possível editar um blogpost sem o campo `title`]**

Se não conter o campo `title` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

**[Será validado que não possível editar um blogpost sem o campo `content`]**

Se não conter o campo `content` o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

## Requisitos Bônus

### 11 - Sua aplicação deve ter o endpoint DELETE `post/:id`

- Deleta o post com o `id` especificado. Só deve ser permitido para o usuário que criou o **BlogPost**.

- Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código `status 401`.

- Caso uma requisição sem token seja recebida, deve-se retornar um código de `status 401`.

- Caso o post referido não exista, deve-se retornar um código de `status 404`.

**[Será validado que é possível deletar um blogpost com sucesso]**

Se deletar blogpost com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `204`:

**[Será validado que não é possível deletar um blogpost com outro usuário]**

Se não for o dono do blogpost o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível deletar um blogpost inexistente]**

Se o blogpost nao existir o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

**[Será validado que não é possível deletar um blogpost sem o token]**

Se não contém o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível deletar um blogpost com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 12 - Sua aplicação deve ter o endpoint DELETE `/user/me`

- Utilizando o token de autenticação nos headers, o usuário correspondente deve ser apagado.

**[Será validado que é possível excluir meu usuário com sucesso]**

Ao deletar um usuário com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `204`:

**[Será validado que não é possivel excluir meu usuário com token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possivel excluir meu usuário sem o token]**

Se não conter o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

### 13 - Sua aplicação deve ter o endpoint GET `post/search?q=:searchTerm`

- Retorna uma array de **BlogPosts** que contenham em seu título, ou conteúdo, o termo pesquisado no `queryParam` da URL. O retorno deve ter o seguinte formato:

```json
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
  ```

- Caso nenhum **BlogPost** satisfaça a busca, retorne um array vazio.

**[Será validado que é possível buscar um blogpost pelo `title`]**

Se a buscar for pelo `title` o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que é possível buscar um blogpost pelo `content`]**

Se a buscar for pelo `content` o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que é possível buscar todos os blogpost quando passa a busca vazia']**

Se a buscar for vazia o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que é possível buscar um blogpost inexistente e retornar array vazio]**

Se a buscar um post inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

**[Será validado que não é possível buscar um blogpost sem o token]**

Se não contém o token o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

**[Será validado que não é possível buscar um blogpost com o token inválido]**

Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
