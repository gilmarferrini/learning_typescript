"use strict";
// strings
console.log("Tipo String");
var nome = "João";
var nome2 = "Ana";
console.log(nome, nome2);
// numbers
console.log("Tipo Number");
var idade = 20;
idade = 20.5;
var idade2 = 27;
console.log(idade, idade2);
// boolean
console.log("Tipo Boolean");
var possuiHobbies = true;
var possuiHobbies2 = false;
console.log(possuiHobbies, possuiHobbies2);
// tipos explicitos
console.log("Tipo Number");
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// Arrays tipo[]
console.log("Tipo Array");
var hobbies = ["Cozinhar", "Correr"];
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var qualquerCoisa = [1, 2, "Javascript", true, { teste: 123 }];
console.log(hobbies, numeros, qualquerCoisa);
// tuplas
console.log("Tipo Tupla");
var endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 260, "Bloco C"];
console.log(endereco);
// enums - enumerações - estrutura com valores pré definidos(meses, gêneros de filmes)
console.log("Tipo Enum");
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; // 100
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
var minhaCor2 = Cor.Azul;
console.log(minhaCor, minhaCor2);
console.log(Cor.Laranja, Cor.Azul);
// any
console.log("Tipo Any");
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
console.log("Funções com tipos");
function retornaNome(nome) {
    return nome;
}
console.log(retornaNome("João"));
function retornaNada() {
    console.log("Função VOID");
}
retornaNada();
function soma(numA, numB) {
    return numA + numB;
}
console.log(soma(2, 2));
function concatenar(p1, p2) {
    return p1 + " " + p2;
}
console.log(concatenar('gilmar', 'ferrini'));
// funções como tipo
console.log("Tipo Função");
var calculo;
calculo = soma;
console.log(calculo(2, 2));
// objetos
console.log("Objetos e tipos");
var usuario = {
    nome: "João",
    idade: 27,
};
// TESTES OBJETOS
console.log("Testes com objeto funcionario");
var funcionario = {
    supervisores: ['João', 'Maria', 'Alberto'],
    baterPonto: function (horario) {
        return (horario <= 8 ? 'Ponto normal' : 'Fora do horário!');
    }
};
console.log(funcionario.supervisores, funcionario.baterPonto(8), funcionario.baterPonto(10));
var novoFuncionario = {
    supervisores: ['João', 'Maria', 'Alberto'],
    baterPonto: function (horario) {
        return (horario <= 8 ? 'Ponto normal' : 'Fora do horário!');
    }
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '9';
console.log("Minha nota \u00E9 " + nota);
// checando tipos em runtime
var valor = 30; // typescript coloca o tipo da variavel automaticamente como number
if (typeof valor === 'number') {
    console.log("É um valor number");
}
else {
    console.log(typeof valor);
}
// Never
// usado normalmente em funções que retorna ERRO
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: "Sabão",
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisar ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço inválido!');
        }
    }
};
// Valores opcionais com tipo Null
console.log("Valores opcionais com tipo null");
var altura = 12;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
contaBancaria.depositar(3000);
console.log(contaBancaria);
console.log(correntista);
