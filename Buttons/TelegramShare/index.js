// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TelegramShareIcon } from '../../icons'

// Constants
import { TELEGRAM_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateTelegramLink = (url, { title }) => {
  return `https://t.me/share/url${generateQueryParams({ url, title })}`
}

const TelegramShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(TELEGRAM_NAME, generateTelegramLink(url, { title }), TelegramShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

TelegramShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default TelegramShareBtn
