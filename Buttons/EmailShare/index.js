// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { EmailIcon } from '../../icons'

// Constants
import { EMAIL_NAME, defaultImgConfig, openShareDialogOnClick } from '../../constants'

const generateEmailLink = (url, { subject, body, separator = ' :: ' }) => {
  return `mailto:${generateQueryParams({ subject, body: body ? body + separator + url : url })}`
}

const EmailShareBtn = ({ url, subject, body, separator, openInNewTab, imgConfig }) =>
  MakeShareButton(EMAIL_NAME, generateEmailLink(url, { subject, body, separator }), EmailIcon, openInNewTab || openShareDialogOnClick, imgConfig || defaultImgConfig)

EmailShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  separator: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default EmailShareBtn
