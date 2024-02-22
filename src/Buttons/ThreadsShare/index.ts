// UTILS
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main Logic
import MakeShareButton from '../../ShareButton'

// Icon
import { ThreadsShareIcon } from '../../Icons'

// CONSTANTS
import { defaultImgConfig, dontOpenShareDialogOnClick, THREADS_NAME } from '../../constants'

type GenerateThreadsLinkType = { title?: string; separator?: string }

type ThreadsShareBtnTypes = {
  url: string
  title?: string
  separator?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateThreadsLink = (url: string, { title, separator = ' :: ' }: GenerateThreadsLinkType) => {
  return `https://www.threads.net/intent/post${generateQueryParams({ text: title ? title + separator + url : url })}`
}

const ThreadsShareBtn = ({ url, title, separator, openInNewTab, imgConfig }: ThreadsShareBtnTypes) => {
  return MakeShareButton(THREADS_NAME, generateThreadsLink(url, { title, separator }), ThreadsShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default ThreadsShareBtn
