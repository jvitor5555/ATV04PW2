// Cenário: Você é o responsável pelo gerenciamento de uma biblioteca e precisa criar um programa em Javascript para gerenciar os livros. O programa deve permitir que você adicione, remova e liste os livros, além de verificar se um livro está disponível e buscar livros por gênero.

let titulos_livros = []; // Lista de títulos de livros
let autores_livros = {}; // Mapa para associar títulos aos autores e gêneros
let conjuto_generos = new Set(); // Conjunto para armazenar os gêneros dos livros

// Função para adicionar um livro à biblioteca
function adicionar_livro(titulo, autor, genero) {
    titulos_livros.push(titulo); // Adiciona o título à lista de livros
    // Associa o autor e o gênero ao título no mapa de autores
    autores_livros[titulo] = { autor: autor, genero: genero }; 
    conjuto_generos.add(genero); // Adiciona o gênero ao conjunto (para evitar duplicação)

    return console.log("Livro adicionado com Sucesso")
}

// Função para remover um livro da biblioteca
function remover_livro(titulo) {
    let index = titulos_livros.indexOf(titulo); // Encontra o índice do livro na lista
    if (index !== -1) {
        titulos_livros.splice(index, 1);  // Remove o título da lista
        
    }
    
    // Remover o autor e o gênero do mapa de autores
    let genero = autores_livros[titulo]?.genero;
    delete autores_livros[titulo];

    // Remover o gênero do conjunto, mas apenas se não houver mais livros desse gênero
    if (genero && !titulos_livros.some(t => autores_livros[t]?.genero === genero)) {
        conjuto_generos.delete(genero);
    }
}

// Função para listar todos os livros
function listar_livros() {
    if (titulos_livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        console.log("Livros cadastrados:");
        titulos_livros.forEach(function(titulo) {
            console.log(titulo);  // Exibe cada título da lista de livros
        });
    }
}

// Função para verificar se um livro está disponível (na lista)
function disponibilidade_livro(titulo) {
    if (titulos_livros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}

// Função para buscar livros por gênero
function livro_por_genero(genero) {
    // Array para armazenar os livros que pertencem ao gênero especificado
    let livros_porGenero = [];

    // Percorre todos os títulos e verifica o gênero de cada livro
    titulos_livros.forEach(function(titulo) {
        if (autores_livros[titulo]?.genero === genero) {
            livros_porGenero.push(titulo);  // Adiciona o título à lista de livros do gênero
        }
    });

    if (livros_porGenero.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livros_porGenero.forEach(function(titulo) {
            console.log(titulo);
        });
    }
}

// Testando as funções
adicionar_livro("coragem é agir com o coração", "fred euboni", "emoção");
adicionar_livro("5 linguagens do amor", "Mateus", "amor");

// Remover livro
remover_livro("coragem é agir com o coração");

// Listando livros
listar_livros();

// Verificando disponibilidade
disponibilidade_livro("coragem é agir com o coração");
disponibilidade_livro("5 linguagens do amor");

// Buscando livros por gênero
livro_por_genero("emoção");
livro_por_genero("amor");
livro_por_genero("aventura");
