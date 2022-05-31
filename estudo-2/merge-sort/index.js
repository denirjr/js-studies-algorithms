const listaLivros = require('./livros');

const mergeSort = (array, nivelAninhamentoLog = 0) => {
    console.log(`NÍVEL DE ANINHAMENTO => ${nivelAninhamentoLog}`)
    console.log('ARRAY => ', array)

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, meio), nivelAninhamentoLog + 1);
        const part2 = mergeSort(array.slice(meio, array.length), nivelAninhamentoLog + 1);

        array = ordena(part1, part2);
    }

    return array;
}

const ordena = (parte1, parte2) => {
    let indiceAtualParte1 = 0;
    let indiceAtualParte2 = 0;
    const resultado = [];

    while (indiceAtualParte1 < parte1.length && indiceAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[indiceAtualParte1];
        let produtoAtualParte2 = parte2[indiceAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            indiceAtualParte1++;

        } else {
            resultado.push(produtoAtualParte2);
            indiceAtualParte2++;
        }
    }

    return resultado.concat(
        indiceAtualParte1 < parte1.length ?
            parte1.slice(indiceAtualParte1) :
            parte2.slice(indiceAtualParte2)
    );
}

console.log('MERGED AND SORTED =>', mergeSort(listaLivros));