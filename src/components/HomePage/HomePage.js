import createElement from '../../lib/createElement'
import Card from '../Card/Card'
import './HomePage.css'

export default function HomePage(cardsArray) {
  const el = createElement('main', { className: 'HomePage' })

  cardsArray && renderCards(cardsArray)

  function renderCards() {
    const cardElements = cardsArray.map(({ question, answer }) =>
      Card(question, answer)
    )
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    renderCards,
    show,
    hide,
  }
}
