import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cogs.svg'

const buttonConfigs = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonConfigs.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button', innerText: text },
      createElement('img', {
        className: 'Navigation__icon',
        src: svgPath,
        alt: '',
        height: '35',
        width: '35',
      })
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)

  return el
}
