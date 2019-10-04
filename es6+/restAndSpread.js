// yarn add @babel/plugin-proposal-object-rest-spread depois de baixar o plugin adicionar dentro de babelrc

//REST -> resto das propiedades


// const usuario = {
//     nome: 'Geovani',
//     idade: 25,
//     empresa: 'CodeJob'
// };



// const { nome, ...resto} = usuario; //  rest operator ...resto

// console.log(nome);
// console.log(resto);


//Utilizando em Arrays
// const arr = [1,2,3,4];


// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);



// function soma(a,b, ...params){
// //     return params.reduce((total,next) => total + next); // soma de todo o array
//     return params;
// }

// console.log(soma(1,3,4,5))




//SPREAD -> repassa as informações do array para outra estrutura de dados


// const arr1 = [1,2,3];
// const arr2 = [4,5,6];


// const arr3 = [...arr1, ...arr2]; // copia cada informações do array e coloca dentro do array 3


// console.log(arr3);


const usuario1 = {
    nome: "Geovani",
    idade: 25,
    empresa: 'CodeJob',
};

const usuario2 = {...usuario1, nome: 'Amanda'};

console.log(usuario2);




