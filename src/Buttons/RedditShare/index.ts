// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { RedditShareIcon } from '../../Icons'

// CONSTANTS
import { REDDIT_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type RedditShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateRedditLink = (url: string, { title }: { title?: string }) => {
  return `https://www.reddit.com/submit${generateQueryParams({ url, title })}`
}

const RedditShareBtn = ({ url, title, openInNewTab, imgConfig }: RedditShareBtnTypes) => {
  return MakeShareButton(REDDIT_NAME, generateRedditLink(url, { title }), RedditShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default RedditShareBtn
