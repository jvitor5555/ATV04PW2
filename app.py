# Cenário: Você é o responsável pelo gerenciamento de uma biblioteca e precisa criar um programa em Javascript para gerenciar os livros. O programa deve permitir que você adicione, remova e liste os livros, além de verificar se um livro está disponível e buscar livros por gênero.

# Requisitos

# Crie uma lista para armazenar os títulos dos livros.
titulos_livros = ['Amor', 'Felicidade', 'Aventura'];

# Crie um mapa para armazenar os autores dos livros, onde a chave é o título do livro e o valor é o autor.
autores_livros = {'Amor': 'João Vitor', 'Felicidade': 'Autor B'};

# Associa o gênero ao seu livro
genero_livros = {'Amor': 'Ação', 'Felicidade': 'Drama'}

# Crie um conjunto para armazenar os gêneros dos livros.
conjunto_generos = set(['Ação', 'Drama', 'Aventura'])


# Função para adicionar um livro à biblioteca

def Adicionar_Livro(titulo, autor, genero):
    titulos_livros.append(titulo)
    autores_livros[titulo] = autor
    genero_livros[titulo] = genero
    conjunto_generos.add(genero)
    print("Novo livro inserido com sucesso :)")


# // Função para remover um livro da biblioteca

def Remover_Livro(titulo):
    try:
        titulos_livros.remove(titulo)
        del autores_livros[titulo]
        genero = genero_livros[titulo]
        del genero_livros[titulo]
        conjunto_generos.remove(genero)
        print(f"O livro '{titulo}' foi removido com sucesso.")
    except ValueError:
        print("O livro não foi encontrado na lista.")
    except KeyError:
        print("Erro ao tentar remover o livro. Detalhes do gênero ou autor não encontrados.")
        
# Função para listar todos os livros

def Listar_Livros():
    print("Lista de livros:")
    for titulo in titulos_livros:
        print(f"- {titulo}")


# Função para verificar se um livro está disponível (na lista)

def Disponibilidade_Livro(titulo):
    if titulo in titulos_livros:
        print(f"O livro '{titulo}' está disponível.")
    else:
        print(f"O livro '{titulo}' não está disponível.")

            
# Função para buscar livros por gênero

def Buscar_Livro_por_Genero(genero, titulo):
    if genero in conjunto_generos:
        if titulo in genero_livros and genero_livros[titulo] == genero:
            print(f"O livro '{titulo}' está disponível no gênero '{genero}'.")
        else:
            print(f"O livro '{titulo}' não está disponível no gênero '{genero}'.")
    else:
        print(f"Gênero '{genero}' não encontrado.")
        

# Testando as funções

Adicionar_Livro("Amor", "João Vitor", "Ação")
Adicionar_Livro("Romance", "Maria Silva", "Romance")

Remover_Livro("Amor")

Listar_Livros()

Disponibilidade_Livro("Amor")

Buscar_Livro_por_Genero("Drama", "Felicidade")

print("\nTitulos após remoção:", titulos_livros)
print("Autores após remoção:", autores_livros)
print("Gêneros após remoção:", conjunto_generos)
print("Gêneros no dicionário após remoção:", genero_livros)