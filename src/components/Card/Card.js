import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(question, answer) {
  const el = createElement('section', { className: 'Card' })
  const heading = createElement('h2', {
    className: 'Card__heading',
    textContent: question,
  })
  const button = createElement('button', {
    className: 'Button',
    textContent: 'Show Answer',
  })
  button.addEventListener('click', () => {
    text.hidden = !text.hidden
    button.textContent === 'Show Answer'
      ? (button.textContent = 'Hide Answer')
      : (button.textContent = 'Show Answer')
  })
  const text = createElement('p', {
    className: 'Card__answer',
    hidden: true,
    textContent: answer,
  })
  const bookmark = createElement('img', {
    className: 'Card__bookmark',
    height: '30',
    width: '30',
    src: '../material/bookmark-regular.svg',
  })

  el.append(heading, button, text, bookmark)

  return el
}
