// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { EmailIcon } from '../../Icons'

// CONSTANTS
import { EMAIL_NAME, defaultImgConfig, openShareDialogOnClick } from '../../constants'

type GenerateEmailLinkProps = {
  subject?: string
  body?: string
  separator?: string
}

type EmailShareBtnProps = {
  url: string
  subject?: string
  body?: string
  separator?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateEmailLink = (url: string, { subject, body, separator = ' :: ' }: GenerateEmailLinkProps) => {
  return `mailto:${generateQueryParams({ subject, body: body ? body + separator + url : url })}`
}

const EmailShareBtn = ({ url, subject, body, separator, openInNewTab, imgConfig }: EmailShareBtnProps) => {
  return MakeShareButton(EMAIL_NAME, generateEmailLink(url, { subject, body, separator }), EmailIcon, openInNewTab || openShareDialogOnClick, imgConfig || defaultImgConfig)
}

export default EmailShareBtn
