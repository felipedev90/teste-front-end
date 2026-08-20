import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})

// jsdom não implementa showModal/close nativamente
// mock que reproduz o comportamento que os componentes dependem.
HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute('open', '')
}

HTMLDialogElement.prototype.close = function () {
  this.removeAttribute('open')
  this.dispatchEvent(new Event('close'))
}
