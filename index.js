console.log("Desafio 1:");
let nomeCompleto = "Fernanda Cavalcante";
console.log(nomeCompleto)

console.log("\nDesafio 2:");
var numeroA = 5;
var numeroB = 10;
var resultado = numeroA*numeroB;
console.log(resultado) 

console.log("\nDesafio 3:");
function saudacao () {
    return "Oi eu sou o Goku"
}

console.log(saudacao());


console.log("\nDesafio 4:");
function multiplica (a,b) {
    return a*b
}
console.log(multiplica(5,5))

console.log("\nDesafio 5:");
function podeDirigir (num) {
    if (num >=18) {
        return"Você pode dirigir"
    } else {
        return "Você não pode dirigir"
}
};
console.log(podeDirigir(17));

console.log("\nDesafio 6:");
for (let i=0; i<=20; i++) {
    console.log(i);
}

console.log("\nDesafio 7:");
for (let i=0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("\nDesafio 8:");

function tabuada (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num*i}`)
}
}
tabuada(5)

console.log("\nDesafio 9:");
function converterEmHoras (minutos) {
    return minutos /60 + " horas"
}
console.log(converterEmHoras(600));



