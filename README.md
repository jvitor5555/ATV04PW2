# ATV04PW2

# Atividade - JavaScript

## Cenário

Você é o responsável pelo gerenciamento de uma **biblioteca** e precisa criar um programa em **JavaScript** para gerenciar os livros. O programa deve permitir que você adicione, remova e liste os livros, além de verificar se um livro está disponível e buscar livros por gênero.

---

## Requisitos

### 1. **Estruturas de Dados**
- **Lista de livros**: Armazenar os **títulos** dos livros.
- **Mapa de autores**: Armazenar os **autores** dos livros, onde a chave é o título do livro e o valor é o autor.
- **Conjunto de gêneros**: Armazenar os **gêneros** dos livros.

### 2. **Funções a Implementar**

#### 1. **adicionarLivro(titulo: String, autor: String, genero: String)**
- **Objetivo**: Adiciona um livro à lista e ao mapa, e adiciona o gênero ao conjunto.
  
#### 2. **removerLivro(titulo: String)**
- **Objetivo**: Remove um livro da lista e do mapa.

#### 3. **listarLivros()**
- **Objetivo**: Exibe todos os livros na lista.

#### 4. **verificarDisponibilidade(titulo: String)**
- **Objetivo**: Verifica se um livro está disponível (ou seja, se está na lista).

#### 5. **buscarLivrosPorGenero(genero: String)**
- **Objetivo**: Retorna uma lista de títulos de livros que pertencem ao gênero especificado.

---

## Como Funciona o Programa

1. **Adicionar Livro**: 
   - O programa deve permitir que um livro seja adicionado com seu título, autor e gênero.
   - O título será armazenado na lista de livros, o autor será armazenado no mapa (com o título como chave) e o gênero será adicionado ao conjunto de gêneros.

2. **Remover Livro**: 
   - O programa deve permitir que um livro seja removido, tanto da lista de livros quanto do mapa de autores.

3. **Listar Livros**: 
   - Exibe todos os livros presentes na biblioteca, com o título e o autor.

4. **Verificar Disponibilidade**: 
   - A função deve verificar se o livro está na lista de livros, indicando se está disponível ou não.

5. **Buscar Livros por Gênero**: 
   - Permite buscar livros com base em seu gênero. A função deve retornar uma lista de livros daquele gênero específico.

---

## Estruturas Utilizadas

- **Lista de livros**: Armazena os títulos dos livros adicionados.
- **Mapa de autores**: Armazena a relação entre títulos de livros e seus respectivos autores.
- **Conjunto de gêneros**: Armazena todos os gêneros distintos dos livros.

### Observação
- **Arquivo Python**: Fiz um arquivo python com o mesmo algoritmo para entender melhor o exercício (Possuo mais afinidade)
