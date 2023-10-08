// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { YummlyShareIcon } from '../../Icons'

// CONSTANTS
import { YUMMLY_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateYummlyLinkTypes = { title?: string; image?: string }

type YummlyShareBtnTypes = {
  url: string
  title?: string
  image?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateYummlyLink = (url: string, { title, image }: GenerateYummlyLinkTypes) => {
  return `https://www.yummly.com/urb/verify${generateQueryParams({ url, title, urbtype: 'bookmarklet', type: 'agg', image })}`
}

const YummlyShareBtn = ({ url, title, image, openInNewTab, imgConfig }: YummlyShareBtnTypes) => {
  return MakeShareButton(YUMMLY_NAME, generateYummlyLink(url, { title, image }), YummlyShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default YummlyShareBtn
