// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { HackerNewsShareIcon } from '../../Icons'

// CONSTANTS
import { HACKERNEWS_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type HackerNewsShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateHackerNewsLink = (url: string, { title }: { title?: string }) => {
  return `http://news.ycombinator.com/submitlink${generateQueryParams({ url, text: title })}`
}

const HackerNewsShareBtn = ({ url, title, openInNewTab, imgConfig }: HackerNewsShareBtnTypes) => {
  return MakeShareButton(HACKERNEWS_NAME, generateHackerNewsLink(url, { title }), HackerNewsShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default HackerNewsShareBtn
