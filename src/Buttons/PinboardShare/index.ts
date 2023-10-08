// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { PinboardShareIcon } from '../../Icons'

// CONSTANTS
import { PINBOARD_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type PinboardShareBtnTypes = {
  url: string
  title?: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generatePinboardLink = (url: string, { title, description }: { title?: string; description?: string }) => {
  return `https://pinboard.in/add${generateQueryParams({ url, title, description })}`
}

const PinboardShareBtn = ({ url, title, description, openInNewTab, imgConfig }: PinboardShareBtnTypes) => {
  return MakeShareButton(PINBOARD_NAME, generatePinboardLink(url, { title, description }), PinboardShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default PinboardShareBtn
