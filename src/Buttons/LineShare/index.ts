// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LineShareIcon } from '../../Icons'

// CONSTANTS
import { LINE_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type LineShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateLineLink = (url: string, { title }: { title?: string }) => {
  return `https://social-plugins.line.me/lineit/share${generateQueryParams({ url, text: title })}`
}

const LineShareBtn = ({ url, title, openInNewTab, imgConfig }: LineShareBtnTypes) => {
  return MakeShareButton(LINE_NAME, generateLineLink(url, { title }), LineShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default LineShareBtn
