import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Storybook button')
export const longText = () =>
  Button("Click Me! (...or not, I don't care, I'm just here for the length.)")
