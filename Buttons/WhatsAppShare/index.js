// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams, isMobileOrTablet } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { WhatsAppShareIcon } from '../../icons'

// Constants
import { WHATSAPP_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateWhatsAppLink = (url, { title, separator = ' :: ' }) => {
  return `https://${isMobileOrTablet() ? 'api' : 'web'}.whatsapp.com/send${generateQueryParams({ text: title ? title + separator + url : url })}`
}

const WhatsAppShareBtn = ({ url, title, separator, openInNewTab, imgConfig }) =>
  MakeShareButton(WHATSAPP_NAME, generateWhatsAppLink(url, { title, separator }), WhatsAppShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

WhatsAppShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  separator: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default WhatsAppShareBtn
