"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
const { digaOi } = require("./novoTs");
console.log(digaOi("Ana"));
