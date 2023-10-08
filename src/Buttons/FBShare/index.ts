// UTILS
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { FBShareIcon } from '../../Icons'

// CONSTANTS
import { FB_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type FBShareBtnTypes = {
  url: string
  quote?: string
  hashTags?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateFBLink = (url: string, { quote, hashTags }: { quote?: string; hashTags?: string }) => {
  return `https://www.facebook.com/sharer/sharer.php${generateQueryParams({ u: url, quote, hashTags })}`
}

const FBShareBtn = ({ url, quote, hashTags, openInNewTab, imgConfig }: FBShareBtnTypes) => {
  return MakeShareButton(FB_NAME, generateFBLink(url, { quote, hashTags }), FBShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default FBShareBtn
