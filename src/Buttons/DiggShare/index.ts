// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { DiggIcon } from '../../Icons'

// CONTANTS
import { DIGG_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type DiggShareBtn = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateDiggLink = (url: string, { title }: { title?: string }) => {
  return `http://digg.com/submit${generateQueryParams({ url, title })}`
}

const DiggShareBtn = ({ url, title, openInNewTab, imgConfig }: DiggShareBtn) => {
  return MakeShareButton(DIGG_NAME, generateDiggLink(url, { title }), DiggIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default DiggShareBtn
