const arr = [1,3,4,5,6];

// const newArr = arr.map(function(item) {
//     return item * 2;
// });


// const newArr = arr.map((item) => {
//     return item * 2;
// });

const newArr = arr.map(item => item * 2); // mesmo funcionamento das outras *função anonima*

console.log(newArr);

// function teste(){

// }


// ************************* //

// const teste = () =>{
//     return "teste"; // funciona da mesma forma porem não é recomendado
// }


// const teste = () => { nome: "geovani"}; não funciona pois precisa do return e identifica as chaves

const teste = () => ({ nome: "geovani"}); // colocando o parenteses funciona
 
console.log(teste())

//******************* *//