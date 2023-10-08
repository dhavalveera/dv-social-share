// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TelegramShareIcon } from '../../Icons'

// CONSTANTS
import { TELEGRAM_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type TelegramShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateTelegramLink = (url: string, { title }: { title?: string }) => {
  return `https://t.me/share/url${generateQueryParams({ url, title })}`
}

const TelegramShareBtn = ({ url, title, openInNewTab, imgConfig }: TelegramShareBtnTypes) => {
  return MakeShareButton(TELEGRAM_NAME, generateTelegramLink(url, { title }), TelegramShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default TelegramShareBtn
