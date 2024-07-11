const isEven = require('./index')

test('este teste deve verificar se um número é par', () => {
    const entrada = 2
    const saida_esperada = true
    expect(isEven(entrada)).toEqual(saida_esperada)
})

test('este teste deve verificar se um número é par e falhar', () => {
    const entrada = 2
    const saida_esperada = false
    expect(isEven(entrada)).toEqual(saida_esperada)
})