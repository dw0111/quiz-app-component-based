import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement(
    'header',
    { className: 'Header' },
    createElement(
      'h1',
      {
        className: 'Header__title',
        textContent: `${title}`,
      },
      createElement('span', {
        className: 'Header__subtitle',
        textContent: `${subtitle}`,
      })
    )
  )

  return el
}
