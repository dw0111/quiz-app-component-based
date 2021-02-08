import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const base = () => Card('Question', 'Answer')
export const next = () => Card('Question2', 'Answer2')
