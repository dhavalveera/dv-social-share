// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { GABShareIcon } from '../../icons'

// Constants
import { GAB_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateGABLink = (url, { title }) => {
  return `https://gab.com/compose${generateQueryParams({ url, text: title })}`
}

const GABShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(GAB_NAME, generateGABLink(url, { title }), GABShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

GABShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default GABShareBtn
