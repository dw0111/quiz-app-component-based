import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const question = createElement(
    'label',
    { className: 'CreateForm__label', innerText: 'Question' },
    createElement('input', {
      className: 'CreateForm__question',
      placeholder: 'What is...?',
      name: 'question',
    })
  )
  const answer = createElement(
    'label',
    { className: 'CreateForm__label', innerText: 'Answer' },
    createElement('input', {
      className: 'CreateForm__answer',
      placeholder: 'It is ...',
      name: 'answer',
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

  el.addEventListener('submit', event => {
    event.preventDefault()
    const question = el.elements.question.value
    const answer = el.elements.answer.value
    onSubmit(question, answer)
    alert('Question added succesfully!')
    el.reset()
  })

  return el
}
