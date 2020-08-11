interface IPessoa {
  nome: string;
  idade?: number;
  [prop: string]: any; // atributo dinamico
}

function saudarComOla(pessoa: IPessoa) {
  console.log(`Olá, ${pessoa.nome}`);
}

function mudarNome(pessoa: IPessoa) {
  pessoa.nome = 'Joana';
}

const pessoa = {
  nome: 'João',
  idade: 27,
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);