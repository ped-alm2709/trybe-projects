# Boas vindas ao repositório do projeto TING(Trybe is not Google)!

# Habilidades

- Manipular Pilhas

- Manipular Deque

- Manipular Nó & Listas ligadas

- Manipular Listas duplamentes ligadas

## O que deverá ser desenvolvido

A `Trybe` lhe convida para implementar um programa que simule o algoritmo de indexação de documentos similar ao do Google. Ou seja, um programa que permita anexar arquivos de texto e posteriormente opere funções de busca sobre tais arquivos

> Com a quantidade de informações disponíveis na Web, encontrar o que você precisa seria quase impossível sem nenhuma ajuda para classificá-las. Os sistemas de classificação do Google organizam centenas de bilhões de páginas da Web, no índice da pesquisa, para fornecer os resultados mais úteis e relevantes em uma fração de segundo. Além disso tudo, a Google também precisa se preocupar em apresentar os resultados de uma maneira que ajude você a encontrar o que está procurando com mais facilidade ainda.

#### Analisar palavras

> Compreender o significado da sua pesquisa é crucial para retornarmos boas respostas. Por isso, para encontrar páginas com informações relevantes, nosso primeiro passo é analisar o significado das palavras na consulta de pesquisa. Desenvolvemos modelos linguísticos para decifrar as sequências de palavras que precisamos procurar no índice.

Não iremos nos apegar a análise de significados ou busca por sinônimos. Nosso objetivo será identificar ocorrências de termos em arquivos _TXT_. Neste contexto, devemos criar um programa que permita anexar arquivos de texto e posteriormente operar funções de busca sobre tais arquivos.

Sendo assim o programa deverá possuir dois módulos:

- Modo gerenciamento de arquivos;

- Modo de buscas.

---

## Desenvolvimento

Este repositório já contém um _template_ com a estrutura de diretórios e arquivos, tanto de código quanto de teste criados. Há também o diretório `statics` que contém os arquivos necessários para realização de testes, caso julgue necessário, sinta-se à vontade para criar novos arquivos ou editar o conteúdo dos arquivos existentes. Veja abaixo:

```md
.
├── statics
│   ├── arquivo_teste.txt
│   ├── novo_paradigma_globalizado.txt
│   └── novo_paradigma_globalizado-min.txt
├── tests
├── ting_file_management
│   ├── file_management.py
│   └── file_process.py
├── ting_word_searches
│   └── word_search.py
├── README.md
├── requirements.txt
└── setup.cfg
```

Apesar do projeto já possuir uma estrutura base, você quem deve implementar tanto as funções quanto os testes (_extra_). Novos arquivos podem ser criados conforme a necessidade.

---

## Requisitos obrigatórios:

### Pacote `ting_file_management`

#### 1 - Implemente uma fila para armazenar os arquivos que serão lidos.

Preencha a classe `Queue`, presente no arquivo `queue.py` utilizando as estruturas vistas no módulo.

A fila (Queue) deve ser uma estrutura `FIFO`, ou seja, o primeiro item a entrar, deve ser o primeiro a sair. Utilize seus conhecimentos de estruturas de dados para otimizar as operações implementadas.

Devemos implementar os métodos de inserção (`enqueue`), remoção (`dequeue`) e busca (`search`).

Vamos expor o tamanho da nossa fila através do método `__len__`.

Na busca, caso um índice inválido seja passado, uma exceção do tipo `IndexError` deve ser lançada. Para uma fila com `N` elementos, índices válidos são inteiros entre `0` e `N-1`.

#### 2 - Implemente uma função `txt_importer` dentro do módulo `file_management` capaz de importar notícias a partir de um arquivo TXT, utilizando "\n" como separador. Todas as mensagens de erro devem ir para a `stderr`.

**Exemplo simples de um arquivo txt a ser importado:**

```md
Acima de tudo,
é fundamental ressaltar que a adoção de políticas descentralizadoras nos obriga
à análise do levantamento das variáveis envolvidas.
```

- Caso o arquivo TXT não exista, deve ser exibida a mensagem: "Arquivo {path_file} não encontrado";

- Caso a extensão do arquivo seja diferente de .txt, deve ser exibida uma mensagem: "Formato inválido" na `stderr`;

- A função deve retornar uma lista contendo as linhas do arquivo.

#### 3 - Implemente uma função `process` dentro do módulo `file_process` capaz de ler o arquivo carregado na função anterior e efetuar o preprocessamento do conteúdo.

**Exemplo de retorno**:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt", # Nome do arquivo recém adicionado
    "qtd_linhas": 3,                        # Quantidade de linhas existentes no arquivo
    "linhas_do_arquivo": [...]              # linhas retornadas pela função do requisito 2
}
```

- A função irá receber como parâmetro a fila que implementamos no requisito 1 e o caminho do arquivo.

- Por padrão deve-se ignorar arquivos com o mesmo nome;

- Não deve haver limites de linhas a serem analisadas;

- O exemplo de saída acima deve ser emitido após cada nova inserção válida, via `stdout`;

- O conteúdo processado deve ser adicionado a uma fila.

#### 4 - Implemente uma função `remove` dentro do módulo `file_process` capaz de remover o primeiro arquivo processado

- A função irá receber como parâmetro a fila que implementamos no requisito 1.

- Por padrão deve-se ignorar a operação caso não hajam arquivos e emitir a mensagem `Não há elementos`;

- Em caso de sucesso de remoção, deve ser emitido a mensagem: "`Arquivo {path_file} removido com sucesso`".

#### 5 - Implemente uma função `file_metadata` dentro do módulo `file_process` capaz de apresentar as informações superficiais de um arquivo processado.

- Baseado na posição informada, deve ser apresentado as informações relacionadas ao arquivo, parecido com o apresentado abaixo;

- Em caso da posição não existir, deve ser exibida uma mensagem de erro: "`Posição inválida`" na `stderr`.

- A função irá receber como parâmetro a fila que implementamos no requisito 1 e o índice a ser buscado.

**Exemplo de mensagem com sucesso**:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt",
    "qtd_linhas": 3,
    "linhas_do_arquivo": [...]
}
```

### Pacote `ting_word_searches`

#### 6 - Implemente uma função `exists_word` dentro do módulo `word_search`, que valide a existência da palavra em todos os arquivos processados. Para cada palavra encontrada, deve-se listar sua linha conforme apresentação abaixo.

- A busca deve ser _case insensitive_ e deve retornar uma lista no formato:

```json
[{
  "palavra": "de",
  "arquivo": "arquivo_teste.txt",
  "ocorrencias": [
    {
      "linha": 1
    },
    {
      "linha": 2
    }
  ]
}]
```

- Caso a palavra não seja encontrada em nenhum arquivo, deve-se retornar uma lista vazia.

#### 7 - Implemente uma função `search_by_word` dentro do módulo `word_search`, que busque a palavra em todos os arquivos processados. Para cada palavra encontrada, deve-se listar sua linha, o conteúdo e o arquivo da ocorrência.

- A busca deve ser _case insensitive_ e deve retornar uma lista no formato:

```json
[{
  "palavra": "de",
  "arquivo": "arquivo_teste.txt",
  "ocorrencias": [
    {
      "linha": 1,
      "conteudo": "Acima de tudo,"
    },
    {
      "linha": 2,
      "conteudo": "é fundamental ressaltar que a adoção de políticas descentralizadoras nos obriga"
    }
  ]
}]
```

- Caso a palavra não seja encontrada em nenhum arquivo, deve-se retornar uma lista vazia.
