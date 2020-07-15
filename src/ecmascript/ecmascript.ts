// arrow function

const somar = function (n1: number, n2: number): number {
  return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(10, 5));

// this na arrow function



// Parâmetro padrão
console.log("Parâmetro Padrão");
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
  while(inicio >= fim) {
    console.log(inicio);
    inicio--
  }
  console.log("Fim!");
}

contagemRegressiva(10);

// Spread=espalhar | Rest=juntar

// USO DO SPREAD
const numbers: number[] = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaA);
console.log(turmaB);

// USO DO REST
function retornaArray(...args: number[]): number[] {
  return [...args];
}

const numeros2: number[] = retornaArray(1, 2, 4, 5, 6);
console.log(numeros2);
console.log(retornaArray(...numbers));

// USANDO NO CONTEXTO DE TUPLA
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]):void {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla)

// Destructuring (Array)

const caracteristicas = ["Motor Zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor, ano);

// Destructuring (Object)

const item = {
  nomeProduto: 'SSD 480 GB',
  precoProduto: 200,
  caracteristicasProduto: {
    statusProduto: 'Importado',
  }
};

const { nomeProduto, precoProduto, caracteristicasProduto : { statusProduto } } = item;
console.log(nomeProduto, precoProduto, statusProduto);


// Template String

const usuarioId: string = "SuporteCod3r";
const notificacoes: string = '10';
const boasVindas = `Boas vindas ${usuarioId} | Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;~
console.log(boasVindas);

// Transformar código antigo em código es6

// // Exercicio 1
// var dobro = function(valor) {
//   return valor * 2
// }
// console.log(dobro(10))

// // Exercicio 2
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
// }

// dizerOla()
// dizerOla("Anna")

// // Exercicio 3
// var nums = [-3, 33, 38, 5]
// console.log('???')

// // Exercicio 4
// var array = [55, 20]

// console.log(array)

// // Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
// console.log(nota1, nota2, nota3)

// // Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

// EX 1
const dobro = (valor: number) => valor * 2;
console.log(dobro(10));

// EX 2
const dizerOla = (nome: string = "Pessoa"): void => {
  console.log(`Olá ${nome}`);
}

dizerOla();
dizerOla("Anna");

// EX3

let nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// EX4

let array = [55, 20, ...nums];
console.log(array);

// EX5 

let notas = [8.5, 6.3, 9.4]

let [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);

// EX6

let cientista = {primeiroNome: "Will", experiencia: 12}
let { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);