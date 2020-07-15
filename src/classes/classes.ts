/*
class Data {
  // Público por padrão
  dia: number // public
  public mes: number
  ano: number // public

  constructor (dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data();
console.log(aniversario);
aniversario.dia = 4;
console.log(aniversario);


const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);
*/

/*
class DataEsperta {
  constructor (public dia: number = 1, public mes: number = 1, public ano: number = 1970) {}
}

const aniversarioEsperto = new DataEsperta();
console.log(aniversarioEsperto);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto);


const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

*/

// Métodos

/*
class Produto {
  
  constructor(
    public nome: string, 
    public preco: number, 
    public desconto: number = 0
  ){}

  public resumo(): string {
    return `Nome: ${this.nome} Preço: R$${this.preco} Desconto:${this.precoComDesconto()} off`;
  }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

}

const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1);
console.log(prod1.resumo());

const prod2 = new Produto('Cardeno Escolar', 18.80, 0.15);
console.log(prod2);
console.log(prod2.resumo());

*/

// MODIFICADORES DE ACESSO


class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string, 
    public modelo: string, 
    public velocidadeMaxima: number = 200
  ){}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if  (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }

}

// const carro1 = new Carro("Fork", "Ka", 185);
// Array(50).fill(0).forEach( () => carro1.acelerar());
// console.log(carro1);
// Array(50).fill(0).forEach( () => carro1.frear());
// console.log(carro1);



// HERANÇA 

class Ferrari extends Carro {

  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima); // Marca assume o valor de Ferrari
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }

}

// PUBLIC => VISIVEL PARA TODO MUNDO
// PRIVATE => SOMENTE PARA A CLASSE
// PROTECTED => ALEM DE SER VISIVEL DENTRO DA CLASSE É TRANSMITIDO POR HERANÇA

const f40 = new Ferrari("F40", 324);
console.log(f40);

// Getters and Setters

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(idade: number) {
    if (idade >= 0 && idade <= 120) {
      this._idade = idade;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
console.log(pessoa1.idade);

// Atributos e métodos estáticos

class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * (raio * raio);
  }
}

console.log(Matematica.areaCirc(4));

// Classe Abstrata

abstract class Calculo {
  protected resultado: number = 0;
  
  abstract executar(...numbers: number[]): void

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce( (ac, valor) => ac + valor);
  }
}

class Multiplicar extends Calculo {
  
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce( (ac, valor) => ac * valor);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());


let c2 = new Multiplicar();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());

// Construtor Privado

class Unico {
  private static instance: Unico = new Unico;
  private constructor(){}

  static getInstance(): Unico {
    return Unico.instance
  }

  agora () {
    return new Date;
  }
}

console.log(Unico.getInstance().agora());

// Somente leitura

class Aviao {
  public readonly modelo: string

  constructor(
    modelo: string, 
    public readonly prefixo: string
  ){
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = 'DC-8'; // ERRO
console.log(turboHelice);