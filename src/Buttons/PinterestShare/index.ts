// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { PinterestShareIcon } from '../../Icons'

// CONSTANTS
import { PINTEREST_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type PinterestShareBtnTypes = {
  url: string
  media: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generatePinterestLink = (url: string, { media, description }: { media: string; description?: string }) => {
  return `https://pinterest.com/pin/create/button/${generateQueryParams({ url, media, description })}`
}

const PinterestShareBtn = ({ url, media, description, openInNewTab, imgConfig }: PinterestShareBtnTypes) => {
  return MakeShareButton(PINTEREST_NAME, generatePinterestLink(url, { media, description }), PinterestShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default PinterestShareBtn
