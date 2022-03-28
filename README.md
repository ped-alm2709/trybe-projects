# Boas vindas ao repositório do projeto Restaurant Orders!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Habilidades

- Trabalhar com Hash map e Dict

- Trabalhar com Set

---

## O que deverá ser desenvolvido

A lanchonete Pão na Chapa, atualmente, possui um sistema de faturamento dos pedidos dos clientes, que salva o nome da pessoa, o pedido realizado, e dia do atendimento (dia da semana). O projeto consiste em ajudar a lanchonete a melhorar esse sistema para que ele possibilite extração de relatórios e, num segundo momento, a controlar seu estoque.

O projeto está estruturado em duas etapas obrigatórias, e a tarefa bônus, também em duas etapas, totalizando 4 requisitos. Foque nas etapas obrigatórias e com o mesmo cuidado que teria com um cliente real: código limpo, com boa manutenção e legibilidade.

---

## Requisitos obrigatórios:

### 1 - Campanha de publicidade, implemente um método chamado `analyze_log` no módulo `src/analyze_log.py` que gere informações de uma lanchonete.

### 2 - Análises contínuas, implemente a classe `TrackOrders` que gere informações contínuas de uma lanchonete.

## Requisitos bônus:

### 3 - Controle de estoque

Atualmente o controle de estoque de ingredientes é feito no caderninho. Ao final da semana, uma pessoa conta quantas unidades, de cada ingrediente, ainda restam no estoque e anota quantos precisam ser comprados, para completar o estoque mínimo de cada ingrediente.

A lanchonete deseja automatizar esse controle: no final da semana, a gerência irá imprimir uma lista de compras com as respectivas quantidades.

#### Dados

O `log` a ser utilizado ainda é o arquivo `data/orders_1.csv`. É garantido que os pedidos da semana não irão zerar nenhum dos estoques.

### 4 - Estoque pode acabar

As campanhas de marketing tiveram sucesso novamente, e atraíram muitas novas pessoas clientes para a lanchonete. Se antes os estoques mínimos eram sempre suficientes para uma semana, agora não são mais...

Suponha os seguintes estoques:

```md
- Pao: 1;

- Queijo: 5;

- Presunto: 3.
```

Se uma pessoa pedir um misto-quente, será possível atendê-la. Porém o pão irá acabar. Se a próxima pessoa pedir hamburguer, não será possível atendê-la. Sua missão é implementar um código que, caso algum ingrediente acabe, todos os pratos que usam aquele ingrediente devem ser imediatamente removidos do cardápio eletrônico, evitando gerar frustração em clientes.

#### Dados

O `log` a ser utilizado agora é o arquivo `data/orders_2.csv`. Se quiser testar pelo arquivo `main.py`, não se esqueça de alterar a variável `path`.
