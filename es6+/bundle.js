"use strict";

// //Ex 01
// // class Usuario {
// //     constructor(email,senha){
// //         this.email = email,
// //         this.senha = senha;
// //     }
// //     isAdmin(){
// //        return this.admin === true ? this.admin === true : false; 
// //     }
// // }
// // class Admin extends Usuario{
// //     constructor(){
// //         super()
// //         this.admin = true;
// //     }
// // }
// // const User1 = new Usuario('email@teste.com', 'senha123');
// // const Adm1 = new Admin('email@teste', 'senha123');
// // console.log(Adm1.isAdmin());
// // console.log(User1.isAdmin());
// //Ex 02
// const usuarios = [
//     {nome: 'Geovani', idade: 25, empresa: 'CodeJob'},
//     {nome: 'Amanda', idade: 24, empresa: 'Uniti'},
//     {nome: 'Joao', idade: 22, empresa: 'EB'},
// ];
// const newArr = usuarios.map(function(item, next){
//     return item.idade;
// }) 
// console.log(newArr);
// const filter = usuarios.filter(function(item){
//     return item.empresa === 'CodeJob';
// })
// console.log(filter);
// const find = usuarios.find(function(item){
//     return item.empresa === 'Google';
// })
// console.log(find);
//3
// const arr = [1,2,3,4,5];
// const newArr2 = arr.map(item => item + 10);
// console.log(newArr2);
//3.2
// const usuario = { nome: "Geovani", idade: 25};
// const mostraidade = (usuario) => usuario.idade; 
// console.log(mostraidade(usuario));
//3.3
// const nome = "Geovani"
// const idade = 25;
// const mostraUsuario = (nome = "Geovani",idade = 18) => ({nome,idade});
// console.log(mostraUsuario(nome,idade));
// console.log(mostraUsuario(nome));
//3.4
// const promise = () => new Promise( (resolve,reject) => resolve());
// 4.1 , 4.2
// const empresa = {
//     nome: 'Uniti',
//     endereco: {
//         cidade: 'Umuarama',
//         estado: 'PR',
//     }
// };
// // function mostraNome({ nome, endereco:{cidade,estado} } = empresa){ // outro exemplo
// //     console.log(nome);
// //     console.log(cidade);
// //     console.log(estado);
// // }
// const {nome,endereco:{cidade,estado}} = empresa;
// // console.log(mostraNome());
// console.log(nome);
// console.log(cidade);
// console.log(estado);
// function mostraInfo(usuario){
//     const {nome,idade} = usuario; 
//     return `${nome} tem ${idade} anos.`;
// }
//ex5.1
// console.log(mostraInfo({nome: 'Geovani', idade:25})); 
// const arr = [1,2,3,4,5,6];
// const [x, ...y] = arr; 
// console.log(x);
// console.log(y);
//5.1
// function soma(...params){
//     return params.reduce((total,next) => total + next);
// }
// console.log(soma(1,2,3,4,5,6));
// console.log(soma(1,2))
// //5.2
// const usuario = {
//     nome: "Geovani",
//     idade: 23,
//     endereco: {
//         cidade: 'Umuarama',
//         uf: 'PR',
//         pais: 'Brasil'
//     }
// };
// const usuario2 = {...usuario, nome: 'Amanda'};
// console.log(usuario2);
// const usuario3 = {...usuario,endereco:{cidade:"Maringá"}};
// console.log(usuario3)
//6 
// const usuario = 'Geovani ';
// const idade = 25;
// console.log(`O usuário ${usuario} possui ${idade} anos de idade`);
var nome = 'Geovani';
var idade = 25;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Umuarama'
};
console.log(usuario);
