import createElement from '../lib/createElement'
import './Card.css'

export default function Card(question, answer) {
  const el = createElement('section', { className: 'Card' })
  const heading = createElement('h2', { textContent: question })
  const button = createElement('button', {
    className: 'Button',
    textContent: 'Show Answer',
  })
  button.addEventListener('click', () => {
    text.hidden = !text.hidden
  })
  const text = createElement('p', { hidden: true, textContent: answer })

  el.append(heading, button, text)

  return el
}
