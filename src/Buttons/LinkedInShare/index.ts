// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LinkedInShareIcon } from '../../Icons'

// CONSTANTS
import { LINKEDIN_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateLinkedInLinkTypes = {
  title?: string
  summary?: string
  source?: string
}

type LinkedInShareBtnTypes = {
  url: string
  title?: string
  summary?: string
  source?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateLinkedInLink = (url: string, { title, summary, source }: GenerateLinkedInLinkTypes) => {
  return `https://linkedin.com/sharing/share-offsite${generateQueryParams({ url, mini: 'true', title, summary, source })}`
}

const LinkedInShareBtn = ({ url, title, summary, source, openInNewTab, imgConfig }: LinkedInShareBtnTypes) => {
  return MakeShareButton(LINKEDIN_NAME, generateLinkedInLink(url, { title, summary, source }), LinkedInShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default LinkedInShareBtn
