const arr = [1,3,4,5,8,9];


const newArr = arr.map(function (item,index){
    return item + index; // percorre o array somando o valor de item com o indice do array

});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next; // percorre o array somando o total com o proximo valor
    // total : 0 + 1, 1 + 3, 4 + 4, 8 + 5, 13 + 8, 21 + 9 = 30;
})

console.log(sum);


const filter = arr.filter(function (item ){
    return item % 2 === 0; // pegando todos numeros pares vendo se o numero é divisivel por 2 
    // retorna 4, 8
});

console.log(filter);


const find = arr.find(function(item){
    return item === 4; // se tiver o 4 dentro do array ele retorna o item;
});

console.log(find);