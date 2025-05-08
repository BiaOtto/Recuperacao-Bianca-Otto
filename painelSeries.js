let totalEpisodiosAssistidos = [3, 2, 0, 4, 1, 5, 0, 6, 2];
let soma = totalEpisodiosAssistidos.reduce(function(total,numero){
    return total + numero;
},0);
console.log(`O total de episodios assistidos é de : ${soma}`);


let diasSemAssistir = [3, 2, 0, 4, 1, 5, 0, 6, 2];
let indice = diasSemAssistir.findIndex(function(numero) {
 return numero < 1;
});
console.log(`O total de dias sem assistir é de : ${indice}`);


/*let mediaPorDias = [3, 2, 0, 4, 1, 5, 0, 6, 2];
mediaPorDias.forEach(function(item,indice) {
    console.log(indice, item);
});*/

let diasMaratonados = [3, 2, 0, 4, 1, 5, 0, 6, 2];
let indices = diasSemAssistir.find(function(numero) {
 return numero > 5 && 7 ;
});
console.log(`O total de dias Maratonados foi de : ${indices}`);

let verificarDias = [3, 2, 0, 4, 1, 5, 0, 6, 2];
let diasAssistidos = verificarDias.every(function(numero) {
 return numero % 9 === 1;
});
console.log(diasAssistidos);

module.exports = {
    totalEpisodiosAssistidos,
    diasSemAssistir,
    diasMaratonados,
    verificarDias
};

//---------------------------------------------------------
