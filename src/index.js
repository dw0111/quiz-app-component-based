import Header from './components/Header'
import Card from './components/Card'

const header = Header('Quiz App', 'QuizHeads unite!')
document.body.append(header)

const card1 = Card('Which city is the capital of Germany?', 'Berlin')

const card2 = Card('Which city is the capital of the Netherlands?', 'Amsterdam')

const card3 = Card('Which city is the capital of Denmark?', 'Copenhagen')

document.body.append(card1, card2, card3)
