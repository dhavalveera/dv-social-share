// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { SkypeShareIcon } from '../../icons'

// Constants
import { SKYPE_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateSkypeLink = (url, { title }) => {
  return `https://web.skype.com/share${generateQueryParams({ url, text: title })}`
}

const SkypeShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(SKYPE_NAME, generateSkypeLink(url, { title }), SkypeShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

SkypeShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default SkypeShareBtn
