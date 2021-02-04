import Header from './components/Header'
import Button from './components/Button'

const header = Header()
document.body.append(header)

const button = Button('Click Me!')
document.body.append(button)
