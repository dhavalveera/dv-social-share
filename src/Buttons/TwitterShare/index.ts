// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TwitterShareIcon } from '../../Icons'

// CONSTANTS
import { TWITTER_NAME, dontOpenShareDialogOnClick, defaultImgConfig } from '../../constants'

type GenerateTwitterLinkTypes = {
  title?: string
  via?: string
  hashTags?: string[]
  related?: string[]
}

type TwitterShareBtnTypes = {
  url: string
  title?: string
  via?: string
  hashTags?: string[]
  related?: string[]
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateTwitterLink = (url: string, { title, via, hashTags = [], related = [] }: GenerateTwitterLinkTypes) => {
  return `https://twitter.com/intent/tweet${generateQueryParams({
    url,
    text: title,
    via,
    hashtags: hashTags.length > 0 ? hashTags.join(',') : undefined,
    related: related.length > 0 ? related.join(',') : undefined,
  })}`
}

const TwitterShareBtn = ({ url, title, via, hashTags, related, openInNewTab, imgConfig }: TwitterShareBtnTypes) => {
  return MakeShareButton(TWITTER_NAME, generateTwitterLink(url, { title, via, hashTags, related }), TwitterShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default TwitterShareBtn
