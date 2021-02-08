import createElement from '../../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', { className: 'Header' })
  const heading = createElement('h2', {
    className: 'Header__title',
    textContent: title,
  })
  const subheading = createElement('span', {
    className: 'Header__subtitle',
    textContent: subtitle,
  })

  heading.append(subheading)
  el.append(heading)

  return el
}
