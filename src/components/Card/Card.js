import createElement from '../../lib/createElement'
import './Card.css'
import './Button.css'

export default function Card(question, answer) {
  const el = createElement(
    'section',
    { className: 'Card' },
    createElement('h2', {
      className: 'Card__heading',
      textContent: `${question}`,
    }),
    createElement('button', {
      className: 'Button',
      textContent: 'Show Answer',
      id: 'buttonShowAnswer',
    }),
    createElement('p', {
      className: 'Card__answer',
      hidden: true,
      textContent: `${answer}`,
      id: 'textAnswer',
    }),
    createElement('img', {
      className: 'Card__bookmark',
      height: '30',
      width: '30',
      src: '../material/bookmark-regular.svg',
    })
  )

  const button = el.querySelector('#buttonShowAnswer')
  const text = el.querySelector('#textAnswer')

  button.addEventListener('click', () => {
    text.hidden = !text.hidden
    button.textContent === 'Show Answer'
      ? (button.textContent = 'Hide Answer')
      : (button.textContent = 'Show Answer')
  })

  return el
}
