// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { FBMessangerIcon } from '../../Icons'

// CONSTANTS
import { FB_MESSENGER_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

type GenerateFBMessangerLinkTypes = {
  appId?: string
  redirectUri?: string
  to?: string
}

type FBMessangerShareBtnTypes = {
  url: string
  appId?: string
  redirectUri?: string
  to?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

const generateFBMessangerLink = (url: string, { appId, redirectUri, to }: GenerateFBMessangerLinkTypes) => {
  return `https://www.facebook.com/dialog/send${generateQueryParams({ link: url, redirect_uri: redirectUri || url, app_id: appId, to })}`
}

const FBMessangerShareBtn = ({ url, appId, redirectUri, to, openInNewTab, imgConfig }: FBMessangerShareBtnTypes) =>
  MakeShareButton(FB_MESSENGER_NAME, generateFBMessangerLink(url, { appId, redirectUri, to }), FBMessangerIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

export default FBMessangerShareBtn
