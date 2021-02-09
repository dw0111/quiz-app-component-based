import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm/CreateForm'
import HomePage from './components/HomePage/HomePage'
import './components/App-Grid/App-Grid.css'

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

const createpage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  CreateForm(onSubmit)
)

const grid = createElement(
  'div',
  { className: 'app-grid' },
  header,
  homepage.el,
  createpage,
  navigation
)

document.body.append(grid)

function navigate(text) {
  if (text === 'Home') {
    homepage.show()
    createpage.hidden = true
  } else if (text === 'Create') {
    homepage.hide()
    createpage.hidden = false
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
  homepage.innerHTML = ''
  homepage.append(...cardElements)
}
