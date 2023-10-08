// UTILS
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { GABShareIcon } from '../../Icons'

// CONSTANTS
import { GAB_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GABShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateGABLink = (url: string, { title }: { title?: string }) => {
  return `https://gab.com/compose${generateQueryParams({ url, text: title })}`
}

const GABShareBtn = ({ url, title, openInNewTab, imgConfig }: GABShareBtnTypes) => {
  return MakeShareButton(GAB_NAME, generateGABLink(url, { title }), GABShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default GABShareBtn
