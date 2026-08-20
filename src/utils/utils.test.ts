import { describe, it, expect } from 'vitest'
import { formatPrice, slugify } from './utils'

describe('formatPrice', () => {
  it('deve formatar 29990 como R$ 299,90', () => {
    const resultado = formatPrice(29990)
    expect(resultado).toMatch(/R\$\s299,90/)
  })

  it('deve formatar 0 como R$ 0,00', () => {
    const resultado = formatPrice(0)
    expect(resultado).toMatch(/R\$\s0,00/)
  })

  it('deve formatar 123456 como R$ 1.234,56', () => {
    const resultado = formatPrice(123456)
    expect(resultado).toMatch(/R\$\s1\.234,56/)
  })

  it('deve formatar corretamente os valores em centavos', () => {
    const resultado = formatPrice(50)
    expect(resultado).toMatch(/R\$\s0,50/)
  })
})

describe('slugify', () => {
  it('deve converter espaços em hifens e caixa baixa', () => {
    expect(slugify('Iphone 11 PRO MAX BRANCO 1')).toBe('iphone-11-pro-max-branco-1')
  })

  it('deve remover acentos', () => {
    expect(slugify('Ônibus Elétrico')).toBe('onibus-eletrico')
  })

  it('deve gerar o mesmo slug para o mesmo texto (determinístico)', () => {
    expect(slugify('IPHONE 13 MINI')).toBe(slugify('IPHONE 13 MINI'))
  })

  it('não deve deixar hifens nas pontas', () => {
    expect(slugify('  Produto Teste  ')).toBe('produto-teste')
  })
})
