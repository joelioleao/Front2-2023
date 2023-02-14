function media(notas) {
    let soma = 0;
    for (let index = 0; index < notas.length; index++) {
        soma += notas[index];
    }
    const mediaNotas = soma / notas.length;
    return mediaNotas;
}

console.log(media([1, 2, 4, 8]));

//Aero Functions//

//function media2(notas) {
//   return notas.reduce((acc, curr) => (acc + curr)) / notas.length}

//console.log(media2([1, 2, 4, 8]));**
