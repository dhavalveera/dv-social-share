// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { WhatsAppShareIcon } from '../../Icons'

// CONSTANTS
import { WHATSAPP_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateWhatsAppLinkTypes = { title?: string; separator?: string }

type WhatsAppShareBtnTypes = {
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

const generateWhatsAppLink = (url: string, { title, separator = ' :: ' }: GenerateWhatsAppLinkTypes) => {
  return `https://api.whatsapp.com/send${generateQueryParams({ text: title ? title + separator + url : url })}`
}

const WhatsAppShareBtn = ({ url, title, separator, openInNewTab, imgConfig }: WhatsAppShareBtnTypes) => {
  return MakeShareButton(WHATSAPP_NAME, generateWhatsAppLink(url, { title, separator }), WhatsAppShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default WhatsAppShareBtn
