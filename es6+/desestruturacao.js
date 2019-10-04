const usuario = {
    nome: 'Geovani',
    idade: 25,
    endereco: {
        cidade: "Umuarama",
        estado: "SC",
    },
};


function mostraNome({ nome, idade }){ // outro exemplo
    console.log(nome, idade);
}




// const { nome, idade,endereco:{ cidade} } = usuario; // desestruturação


// console.log(nome);
// console.log(idade);
// console.log(cidade);



// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;