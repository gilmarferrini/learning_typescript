// strings
console.log("Tipo String");
let nome = "João";
let nome2: string = "Ana";
console.log(nome, nome2);

// numbers
console.log("Tipo Number");
let idade = 20;
idade = 20.5;
let idade2: number = 27;
console.log(idade, idade2);

// boolean
console.log("Tipo Boolean");
let possuiHobbies = true;
let possuiHobbies2: boolean = false;
console.log(possuiHobbies, possuiHobbies2);

// tipos explicitos
console.log("Tipo Number");
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);

// Arrays tipo[]
console.log("Tipo Array");
let hobbies: string[] = ["Cozinhar", "Correr"];
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let qualquerCoisa: any[] = [1, 2, "Javascript", true, { teste: 123}];
console.log(hobbies, numeros, qualquerCoisa);

// tuplas
console.log("Tipo Tupla");
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 260, "Bloco C"];
console.log(endereco);

// enums - enumerações - estrutura com valores pré definidos(meses, gêneros de filmes)
console.log("Tipo Enum");
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 2,// 2
  Laranja, // 3
  Amarelo, // 4
  Vermelho = 100 // 100
}

let minhaCor: Cor = Cor.Verde;
let minhaCor2: Cor = Cor.Azul;
console.log(minhaCor, minhaCor2);
console.log(Cor.Laranja, Cor.Azul);

// any
console.log("Tipo Any");
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019};
console.log(carro);

// funções
console.log("Funções com tipos");

function retornaNome(nome: string): string {
  return nome;
}
console.log(retornaNome("João"))

function retornaNada(): void {
  console.log("Função VOID");
}
retornaNada();

function soma(numA: number, numB: number): number {
  return numA + numB;
}
console.log(soma(2, 2));

function concatenar(p1: string, p2: string): string {
  return `${p1} ${p2}`;
}
console.log(concatenar('gilmar', 'ferrini'));

// funções como tipo
console.log("Tipo Função");
let calculo: (a: number, b: number) => number;
calculo = soma;
console.log(calculo(2, 2));

// objetos
console.log("Objetos e tipos");
let usuario: { nome: string, idade: number} = {
  nome: "João",
  idade: 27,
}

// TESTES OBJETOS
console.log("Testes com objeto funcionario");
let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ['João', 'Maria', 'Alberto'],
  baterPonto: (horario: number): string => {
    return (horario <=  8 ? 'Ponto normal': 'Fora do horário!');
  }
}
console.log(funcionario.supervisores, funcionario.baterPonto(8), funcionario.baterPonto(10));

// Alias

type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

const novoFuncionario: Funcionario = {
  supervisores: ['João', 'Maria', 'Alberto'],
  baterPonto: (horario: number): string => {
    return (horario <=  8 ? 'Ponto normal': 'Fora do horário!');
  }
}

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);
nota = '9';
console.log(`Minha nota é ${nota}`);

// checando tipos em runtime

let valor = 30; // typescript coloca o tipo da variavel automaticamente como number

if (typeof valor === 'number') {
  console.log("É um valor number");
} else {
  console.log(typeof valor);
}


// Never
// usado normalmente em funções que retorna ERRO
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: -1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisar ter um nome');
    }
    if (this.preco < 0) {
      falha('Preço inválido!');
    }
  }
}

// Valores opcionais com tipo Null
console.log("Valores opcionais com tipo null")
let altura = 12;
let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
};

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '98765432',
  tel2: null
};
console.log(contato1);

// Transformando código js em ts

// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//       this.saldo += valor
//   }
// }

// let correntista = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

type ContaBancaria = {
  saldo: number,
  depositar: (quantia: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  }
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria,
  contatos: ['34567890', '98765432']
}

contaBancaria.depositar(3000);
console.log(contaBancaria);
console.log(correntista);