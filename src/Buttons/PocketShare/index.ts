// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { PocketShareIcon } from '../../Icons'

// CONSTANTS
import { POCKET_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type PocketShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generatePocketLink = (url: string, { title }: { title?: string }) => {
  return `https://getpocket.com/save${generateQueryParams({ url, title })}`
}

const PocketShareBtn = ({ url, title, openInNewTab, imgConfig }: PocketShareBtnTypes) => {
  return MakeShareButton(POCKET_NAME, generatePocketLink(url, { title }), PocketShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default PocketShareBtn
