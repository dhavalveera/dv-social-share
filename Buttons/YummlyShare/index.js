// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { YummlyShareIcon } from '../../icons'

// Constants
import { YUMMLY_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateYummlyLink = (url, { title, image }) => {
  return `https://www.yummly.com/urb/verify${generateQueryParams({ url, title, urbtype: 'bookmarklet', type: 'agg', image })}`
}

const YummlyShareBtn = ({ url, title, image, openInNewTab, imgConfig }) =>
  MakeShareButton(YUMMLY_NAME, generateYummlyLink(url, { title, image }), YummlyShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

YummlyShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default YummlyShareBtn
