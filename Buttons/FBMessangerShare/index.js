// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { FBMessangerIcon } from '../../icons'

// Constants
import { FB_MESSENGER_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateFBMessangerLink = (url, { appId, redirectUri, to }) => {
  return `https://www.facebook.com/dialog/send${generateQueryParams({ link: url, redirect_uri: redirectUri || url, app_id: appId, to })}`
}

const FBMessangerShareBtn = ({ url, appId, redirectUri, to, openInNewTab, imgConfig }) =>
  MakeShareButton(FB_MESSENGER_NAME, generateFBMessangerLink(url, { appId, redirectUri, to }), FBMessangerIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

FBMessangerShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  appId: PropTypes.string,
  redirectUri: PropTypes.string,
  to: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default FBMessangerShareBtn
