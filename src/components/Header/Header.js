import createElement from '../../lib/createElement'
import './Header.css'

export default function Header(title) {
  const headerTitle = createElement('h1', {
    className: 'Header__title',
    textContent: `${title}`,
  })
  const el = createElement('header', { className: 'Header' }, headerTitle)

  function setText(text) {
    headerTitle.textContent = `${text}`
  }

  return { el, setText }
}
