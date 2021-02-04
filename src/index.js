import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'

const header = Header('Quiz App', 'May the better quizzer win!')
document.body.append(header)

const button = Button('Click Me!')
document.body.append(button)

const card = Card(
  'Which city is the capital of Germany',
  "Berlin is Germany's capital"
)
document.body.append(card)
