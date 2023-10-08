// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { InstaPaperShareIcon } from '../../Icons'

// CONSTANTS
import { INSTAPAPER_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type InstapaperShareBtnTypes = {
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

const generateInstapaperLink = (url: string, { title, description }: { title?: string; description?: string }) => {
  return `http://www.instapaper.com/hello2${generateQueryParams({ url, title, description })}`
}

const InstapaperShareBtn = ({ url, title, description, openInNewTab, imgConfig }: InstapaperShareBtnTypes) => {
  return MakeShareButton(INSTAPAPER_NAME, generateInstapaperLink(url, { title, description }), InstaPaperShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default InstapaperShareBtn
