interface IPessoa {
  nome: string;
  idade?: number;
  [prop: string]: any; // atributo dinamico
  saudar?:(sobrenome: string) => void; // retorna nada ou undefined
}

function saudarComOla(pessoa: IPessoa) {
  console.log(`Olá, ${pessoa.nome}`);
}

function mudarNome(pessoa: IPessoa) {
  pessoa.nome = 'Joana';
}

const pessoa: IPessoa = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
  }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');