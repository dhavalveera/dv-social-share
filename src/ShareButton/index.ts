import { ChangeEvent, createElement } from 'react'

// Utils
import { CustomWindow, getCenterPosition } from '../utils'

// CONSTANTS
import { ShareBtnCss } from '../constants'

type ImgConfigProps = {
  width?: number
  height?: number
  bgColor?: string
}

const MakeShareButton = (name: string, url: string, Icon: string, openShareDialogOnClick: boolean, imgConfig: ImgConfigProps) => {
  const handleOnClick = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const windowConfig = { width: 600, height: 600, ...getCenterPosition(1200, 1200) }

    CustomWindow(url, windowConfig, openShareDialogOnClick)
  }

  return createElement(
    'button',
    { type: 'button', 'aria-label': `${name}-Share`, title: name, onClick: handleOnClick, className: ShareBtnCss },
    createElement('img', {
      src: Icon,
      alt: `${name} Icon`,
      'aria-label': `${name}Icon`,
      width: imgConfig.width === 32 ? 32 : imgConfig.width,
      height: imgConfig.height === 32 ? 32 : imgConfig.height,
      style: {
        cursor: 'pointer',
        backgroundColor: imgConfig.bgColor === 'transparent' ? 'transparent' : imgConfig.bgColor,
        mixBlendMode: imgConfig.bgColor === 'transparent' ? 'darken' : 'color-burn',
      },
    }),
  )
}

export default MakeShareButton
