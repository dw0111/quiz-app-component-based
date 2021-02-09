import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm/CreateForm'
import './components/App-Grid/App-Grid.css'
import './components/HomePage/HomePage.css'

const header = Header('Quiz App', 'QuizHeads unite!')
const navigation = Navigation(navigate)

function navigate(text) {
  if (text === 'Home') {
    homepage.hidden = false
    createpage.hidden = true
  } else if (text === 'Create') {
    homepage.hidden = true
    createpage.hidden = false
  }
}

const homepage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card('Which city is the capital of Germany?', 'Berlin'),
  Card('Which city is the capital of the Netherlands?', 'Amsterdam'),
  Card('Which city is the capital of Denmark?', 'Copenhagen')
)

const createpage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  CreateForm()
)

const grid = createElement(
  'div',
  { className: 'app-grid' },
  header,
  homepage,
  createpage,
  navigation
)

document.body.append(grid)
