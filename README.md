# Boas vindas ao repositório do projeto Cookmaster!

# Habilidades

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Realizar testes de integração

---

## O que deverá ser desenvolvido

Neste novo projeto deverá ser possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

---

## Desenvolvimento

Será desenvolvido todas as camadas da aplicação (Models, Service e Controllers) a partir do seu código no projeto cookmaster.

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, as pessoas usuárias devem poder ser clientes ou administradores. Pessoas clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação deverá ser feita via `JWT`.

Deverá ser possível adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

---

## Coleções

O banco terá duas coleções: usuários e receitas.

A coleção de usuários terá o seguinte nome: `users`.

Os campos da coleção `users` terão este formato:

```json
{ "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }
```

A resposta do insert para ser retornada após a criação é esta:

```json
{ "_id" : ObjectId("5f46914677df66035f61a355"), "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }
```
(O _id será gerado automaticamente pelo mongodb)

A coleção de receitas terá o seguinte nome: `recipes`.

Os campos da coleção `recipes` terão este formato:

```json
{ "name" : "Receita do Jacquin", "ingredients" : "Frango", "preparation" : "10 minutos no forno" }
```

A resposta do insert para ser retornada após a criação é esta:

```json
{ "_id" : ObjectId("5f46919477df66035f61a356"), "name" : "string", "ingredients" : "string", "preparation" : "string", "userId" : ObjectId("5f46914677df66035f61a355") }
```
(O _id será gerado automaticamente pelo mongodb, e o userId será gerado com o id do usuário que criou a receita)

---

# Requisitos do projeto

### 1 - Crie um endpoint para o cadastro de usuários

### 2 - Crie um endpoint para o login de usuários

### 3 - Crie um endpoint para o cadastro de receitas

### 4 - Crie um endpoint para a listagem de receitas

### 5 - Crie um endpoint para visualizar uma receita específica

### 6 - Crie uma query em mongo que insira uma pessoa usuária com permissões de admin

### 7 - Crie um endpoint para a edição de uma receita

### 8 - Crie um endpoint para a exclusão de uma receita

### 9 - Crie um endpoint para a adição de uma imagem a uma receita

### 10 - Crie um endpoint para acessar a imagem de uma receita

### 11 - Crie testes de integração que cubram no mínimo 30% dos arquivos em `src`, com um mínimo de 50 linhas cobertas

## Requisitos Bônus

### 12 - Crie um endpoint para cadastro de pessoas administradoras

### 13 - Crie testes de integração que cubram no mínimo 60% dos arquivos em `src`, com um mínimo de 100 linhas cobertas

### 14 - Crie testes de integração que cubram no mínimo 90% dos arquivos em `src`, com um mínimo de 150 linhas cobertas
