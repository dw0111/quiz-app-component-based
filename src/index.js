import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import './components/App-Grid/App-Grid.css'
import './components/Main/Main.css'

const header = Header('Quiz App', 'QuizHeads unite!')
const navigation = Navigation(navigate)

function navigate(text) {
  console.log(text)
}

const grid = createElement(
  'div',
  { className: 'app-grid' },
  header,
  createElement(
    'div',
    { className: 'Main' },
    Card('Which city is the capital of Germany?', 'Berlin'),
    Card('Which city is the capital of the Netherlands?', 'Amsterdam'),
    Card('Which city is the capital of Denmark?', 'Copenhagen')
  ),
  navigation
)

document.body.append(grid)
