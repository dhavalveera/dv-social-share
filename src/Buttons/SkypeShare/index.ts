// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { SkypeShareIcon } from '../../Icons'

// CONSTANTS
import { SKYPE_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type SkypeShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateSkypeLink = (url: string, { title }: { title?: string }) => {
  return `https://web.skype.com/share${generateQueryParams({ url, text: title })}`
}

const SkypeShareBtn = ({ url, title, openInNewTab, imgConfig }: SkypeShareBtnTypes) => {
  return MakeShareButton(SKYPE_NAME, generateSkypeLink(url, { title }), SkypeShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default SkypeShareBtn
