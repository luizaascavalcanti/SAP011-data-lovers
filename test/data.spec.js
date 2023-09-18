import { example, anotherExample } from '../src/data.js';
import {generalFilter} from '../src/data.js';

const rick = {
  "name": "Rick Sanchez",
  "status": "Alive",
  "gender": "Male",
}

const data = ["rick Sanchez"];

describe('Testes da função filterByName', () => {

  it('Validando que é uma função', () => {
    expect(typeof generalFilter).toBe('function');
  });

  it('Validando que filtro por nome, filtra corretamente', () => {
    const resultado = filterByName(data, "Rick Sanchez");

    expect(resultado).toStrictEqual([rick]);
  });

  it('Validando que filtro por nome, retorna vazio, caso nome não seja encontrado', () => {
    const resultado = filterByName(data, "batatinha");

    expect(resultado).toStrictEqual([]);
  });
});
//////////////////////////////////////////////////////////////
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
