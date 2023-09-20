import {nameFilter} from '../src/data.js';


const rick = {
  "name": "Rick Sanchez",
  "status": "Alive",
  "gender": "Male",
}
const data = ["rick Sanchez"];

describe('Testes da função nameFilter', () => {

  it('Validando que é uma função', () => {
    expect(typeof nameFilter).toBe('function');
  });


  it('Validando que filtro por nome, filtra corretamente', () => {
    const resultado = nameFilter(data, "Rick Sanchez");

    expect(resultado).toStrictEqual([rick]);
  });

  it('Validando que filtro por nome, retorna vazio, caso nome não seja encontrado', () => {
    const resultado = nameFilter(data, "batatinha");

    expect(resultado).toStrictEqual([]);
  });
});
