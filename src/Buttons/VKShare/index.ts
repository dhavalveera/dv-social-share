// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { VKShareIcon } from '../../Icons'

// CONSTANTS
import { VK_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateVKLinkTypes = { title?: string; image?: string; noParse?: boolean; noVkLinks?: boolean }

type VKShareBtnTypes = {
  url: string
  title?: string
  image?: string
  noParse?: boolean
  noVkLinks?: boolean
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateVKLink = (url: string, { title, image, noParse, noVkLinks }: GenerateVKLinkTypes) => {
  return `https://vk.com/share.php${generateQueryParams({ url, title, image, noparse: noParse ? 1 : 0, no_vk_links: noVkLinks ? 1 : 0 })}`
}

const VKShareBtn = ({ url, title, image, noParse, noVkLinks, openInNewTab, imgConfig }: VKShareBtnTypes) => {
  return MakeShareButton(VK_NAME, generateVKLink(url, { title, image, noParse, noVkLinks }), VKShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default VKShareBtn
