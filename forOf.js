const clientes = ["Samuel ", "Joana"];
var i = 1;
for (item of clientes) {

    console.log("\n"+i+"° cliente: " + item);
    i++;
}

let nome = clientes.push("Matheus");

console.log("\nCliente adicionado, " + nome + "° da fila");
var i = 1;

for (item of clientes) {

    console.log("\n"+i+"° cliente: " + item);
    i++
}