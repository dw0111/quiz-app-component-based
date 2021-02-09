import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm/CreateForm'
import './components/App-Grid/App-Grid.css'
import './components/HomePage/HomePage.css'

const header = Header('Quiz App', 'QuizHeads unite!')
const navigation = Navigation(navigate)
const cards = [
  { question: 'Which city is the capital of Germany?', answer: 'Berlin' },
  {
    question: 'Which city is the capital of the Netherlands?',
    answer: 'Amsterdam',
  },
]

const homepage = createElement('main', { className: 'HomePage' })

const createpage = createElement(
  'main',
  { className: 'CreatePage hidden' },
  CreateForm(onSubmit)
)
renderCards()

const grid = createElement(
  'div',
  { className: 'app-grid' },
  header,
  homepage,
  createpage,
  navigation
)

document.body.append(grid)

function navigate(text) {
  if (text === 'Home') {
    homepage.classList.toggle('hidden')
    createpage.classList.toggle('hidden')
  } else if (text === 'Create') {
    homepage.classList.toggle('hidden')
    createpage.classList.toggle('hidden')
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
