// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { RefindShareIcon } from '../../icons'

// Constants
import { REFIND_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateRefindLink = url => {
  return `https://refind.com/${generateQueryParams({ url })}`
}

const RefindShareBtn = ({ url, openInNewTab, imgConfig }) =>
  MakeShareButton(REFIND_NAME, generateRefindLink(url), RefindShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

RefindShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default RefindShareBtn
