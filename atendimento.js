var i = 1;
const fila = [" Luiz", " Ana ", " Roberta"];

console.log("\nFila atual: " + fila);

function atendeCliente(cliente) {

    console.log("\nAtendendo o " + i + "° cliente:" + fila[0]);
    fila.shift();
    i++
}

while (fila.length > 0) {

    atendeCliente(fila[0]);
}

console.log("\nFim da fila...");