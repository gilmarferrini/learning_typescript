interface Humano {
  nome: string;
  idade: number;
  [prop: string]: any; // atributo dinamico
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome ${this.nome} ${sobrenome} `);
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: "Jonas", idade: 25, altura: 1.75 });
pessoa.saudar("Skywalker");