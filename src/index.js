import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import CreateForm from './components/CreateForm/CreateForm'

const header = Header('Quiz App', 'QuizHeads unite!')
document.body.append(header)

const card = Card(
  'Which city is the capital of Germany?',
  "Berlin is Germany's capital."
)
document.body.append(card)

const button = Button('Click Me!')
document.body.append(button)

const create = CreateForm()
document.body.append(create)
