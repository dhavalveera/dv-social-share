// UTILS
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { FlipboardShareIcon } from '../../Icons'

// CONSTANTS
import { FLIPBOARD_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type FlipboardShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateFlipboardLink = (url: string, { title }: { title?: string }) => {
  return `https://share.flipboard.com/bookmarklet/popout${generateQueryParams({ v: 2, title, url })}`
}

const FlipboardShareBtn = ({ url, title, openInNewTab, imgConfig }: FlipboardShareBtnTypes) => {
  return MakeShareButton(FLIPBOARD_NAME, generateFlipboardLink(url, { title }), FlipboardShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default FlipboardShareBtn
