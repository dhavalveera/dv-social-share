// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LineShareIcon } from '../../icons'

// Constants
import { LINE_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateLineLink = (url, { title }) => {
  return `https://social-plugins.line.me/lineit/share${generateQueryParams({ url, text: title })}`
}

const LineShareBtn = ({ url, title, description, openInNewTab, imgConfig }) =>
  MakeShareButton(LINE_NAME, generateLineLink(url, { title, description }), LineShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

LineShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default LineShareBtn
