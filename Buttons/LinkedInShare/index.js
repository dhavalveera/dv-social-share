// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LinkedInShareIcon } from '../../icons'

// Constants
import { LINKEDIN_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateLinkedInLink = (url, { title, summary, source }) => {
  return `https://linkedin.com/sharing/share-offsite${generateQueryParams({ url, mini: 'true', title, summary, source })}`
}

const LinkedInShareBtn = ({ url, title, summary, source, openInNewTab, imgConfig }) =>
  MakeShareButton(LINKEDIN_NAME, generateLinkedInLink(url, { title, summary, source }), LinkedInShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

LinkedInShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  source: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default LinkedInShareBtn
