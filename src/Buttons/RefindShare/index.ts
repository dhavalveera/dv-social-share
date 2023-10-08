// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { RefindShareIcon } from '../../Icons'

// CONSTANTS
import { REFIND_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type RefindShareBtnTypes = {
  url: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateRefindLink = (url: string) => {
  return `https://refind.com/${generateQueryParams({ url })}`
}

const RefindShareBtn = ({ url, openInNewTab, imgConfig }: RefindShareBtnTypes) => {
  return MakeShareButton(REFIND_NAME, generateRefindLink(url), RefindShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default RefindShareBtn
