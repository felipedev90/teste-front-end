import type { FormEvent } from 'react'
import './Newsletter.scss'

export default function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs">
            <label htmlFor="newsletter-name" className="sr-only">
              Digite seu nome
            </label>
            <input id="newsletter-name" type="text" placeholder="Digite seu nome" required />

            <label htmlFor="newsletter-email" className="sr-only">
              Digite seu e-mail
            </label>
            <input id="newsletter-email" type="email" placeholder="Digite seu e-mail" required />

            <button type="submit">INSCREVER</button>
          </div>

          <div className="newsletter__checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  )
}
