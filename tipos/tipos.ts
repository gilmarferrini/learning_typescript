// strings

let nome = 'João';
let nome2: string = 'Ana';
console.log(nome, nome2);

// numbers

let idade = 20;
idade = 20.5;
let idade2: number = 27;
console.log(idade, idade2);

// boolean

let possuiHobbies = true;
let possuiHobbies2: boolean = false;
console.log(possuiHobbies, possuiHobbies2);

// tipos explicitos

let minhaIdade; // any
minhaIdade = 27;
console.log(typeof minhaIdade); // number
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);