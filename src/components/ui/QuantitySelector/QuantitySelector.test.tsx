import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import QuantitySelector from './QuantitySelector'

describe('QuantitySelector', () => {
  it('deve exibir o valor atual formatado com dois dígitos', () => {
    render(<QuantitySelector value={1} onChange={() => {}} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('deve chamar onChange com o valor incrementado ao clicar em +', () => {
    const onChangeMock = vi.fn()
    render(<QuantitySelector value={1} onChange={onChangeMock} />)

    fireEvent.click(screen.getByRole('button', { name: /aumentar quantidade/i }))

    expect(onChangeMock).toHaveBeenCalledWith(2)
  })

  it('deve chamar onChange com o valor decrementado ao clicar em -', () => {
    const onChangeMock = vi.fn()
    render(<QuantitySelector value={3} onChange={onChangeMock} />)

    fireEvent.click(screen.getByRole('button', { name: /diminuir quantidade/i }))

    expect(onChangeMock).toHaveBeenCalledWith(2)
  })

  it('deve desabilitar o botão de diminuir quando o valor for 1', () => {
    render(<QuantitySelector value={1} onChange={() => {}} />)
    expect(screen.getByRole('button', { name: /diminuir quantidade/i })).toBeDisabled()
  })

  it('não deve chamar onChange ao clicar em - quando já está em 1', () => {
    const onChangeMock = vi.fn()
    render(<QuantitySelector value={1} onChange={onChangeMock} />)

    fireEvent.click(screen.getByRole('button', { name: /diminuir quantidade/i }))

    expect(onChangeMock).not.toHaveBeenCalled()
  })
})
