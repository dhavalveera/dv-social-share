// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TumblrShareIcon } from '../../Icons'

// CONSTANTS
import { TUMBLR_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateTumblrLinkTypes = {
  title?: string
  caption?: string
  tags?: string[]
  postTypes?: string
}

type TumblrShareBtnTypes = {
  url: string
  title?: string
  caption?: string
  tags?: string[]
  postTypes?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateTumblrLink = (url: string, { title, caption, tags, postTypes }: GenerateTumblrLinkTypes) => {
  return `https://www.tumblr.com/widgets/share/tool${generateQueryParams({ url, text: title, caption, tags, postTypes })}`
}

const TumblrShareBtn = ({ url, title, caption, tags, postTypes, openInNewTab, imgConfig }: TumblrShareBtnTypes) => {
  return MakeShareButton(TUMBLR_NAME, generateTumblrLink(url, { title, caption, tags, postTypes }), TumblrShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default TumblrShareBtn
