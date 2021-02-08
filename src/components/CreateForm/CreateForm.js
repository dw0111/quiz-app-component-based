import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const question = createElement(
    'label',
    { className: 'CreateForm__label', innerText: 'Question' },
    createElement('input', {
      className: 'CreateForm__question',
      placeholder: 'What is...?',
    })
  )
  const answer = createElement(
    'label',
    { className: 'CreateForm__label', innerText: 'Answer' },
    createElement('input', {
      className: 'CreateForm__answer',
      placeholder: 'It is ...',
    })
  )
  const button = createElement('button', {
    className: 'Button',
    innerText: 'Submit new question!',
  })

  const el = createElement(
    'form',
    { className: 'CreateForm' },
    question,
    answer,
    button
  )

  return el
}
