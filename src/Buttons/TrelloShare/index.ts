// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TrelloShareIcon } from '../../Icons'

// CONSTANTS
import { TRELLO_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type TrelloShareBtnTypes = {
  url: string
  desc?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateTrelloLink = (url: string, { desc }: { desc?: string }) => {
  return `https://trello.com/add-card${generateQueryParams({ mode: 'popup', url, desc })}`
}

const TrelloShareBtn = ({ url, desc, openInNewTab, imgConfig }: TrelloShareBtnTypes) => {
  return MakeShareButton(TRELLO_NAME, generateTrelloLink(url, { desc }), TrelloShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default TrelloShareBtn
