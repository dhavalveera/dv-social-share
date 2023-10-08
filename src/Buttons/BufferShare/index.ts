// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { BufferIcon } from '../../Icons'

// CONSTANTS
import { BUFFER_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type BufferShareBtnProps = {
  url: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateBufferLink = (url: string, { title }: { title?: string }) => {
  return `https://publish.buffer.com/compose${generateQueryParams({ text: title, url })}`
}

const BufferShareBtn = ({ url, title, openInNewTab, imgConfig }: BufferShareBtnProps) => {
  return MakeShareButton(BUFFER_NAME, generateBufferLink(url, { title }), BufferIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default BufferShareBtn
