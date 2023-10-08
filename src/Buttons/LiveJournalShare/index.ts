// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LiveJournalShareIcon } from '../../Icons'

// CONSTANTS
import { LIVEJOURNAL_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type LiveJournalShareBtnTypes = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateLiveJournalLink = (url: string, { title }: { title?: string }) => {
  return `https://www.livejournal.com/update.bml${generateQueryParams({ event: url, subject: title })}`
}

const LiveJournalShareBtn = ({ url, title, openInNewTab, imgConfig }: LiveJournalShareBtnTypes) => {
  return MakeShareButton(LIVEJOURNAL_NAME, generateLiveJournalLink(url, { title }), LiveJournalShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default LiveJournalShareBtn
