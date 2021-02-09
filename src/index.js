import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import HomePage from './components/HomePage/HomePage'
import './components/App-Grid/App-Grid.css'
import CreatePage from './components/CreatePage/CreatePage'

const header = Header('Quiz App', 'QuizHeads unite!')
const navigation = Navigation(navigate)
const cards = [
  { question: 'Which city is the capital of Germany?', answer: 'Berlin' },
  {
    question: 'Which city is the capital of the Netherlands?',
    answer: 'Amsterdam',
  },
]

const homepage = HomePage(cards)

const createpage = CreatePage(onSubmit)

const grid = createElement(
  'div',
  { className: 'app-grid' },
  header.el,
  homepage.el,
  createpage.el,
  navigation
)

document.body.append(grid)

function navigate(text) {
  if (text === 'Home') {
    homepage.show()
    createpage.hide()
    header.setText('Dashboard')
  } else if (text === 'Create') {
    homepage.hide()
    createpage.show()
    header.setText('New question')
  }
}

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homepage.el.innerHTML = ''
  homepage.el.append(...cardElements)
}
