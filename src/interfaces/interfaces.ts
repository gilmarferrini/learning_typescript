interface IPessoa {
  nome: string;
  idade?: number;
  [prop: string]: any; // atributo dinamico
  saudar(sobrenome: string): void;
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

class Cliente implements IPessoa {
  nome: string = '';
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
  }
}


const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente);