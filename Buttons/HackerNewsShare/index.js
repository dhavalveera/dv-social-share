// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { HackerNewsShareIcon } from '../../icons'

// Constants
import { HACKERNEWS_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateHackerNewsLink = (url, { title }) => {
  return `http://news.ycombinator.com/submitlink${generateQueryParams({ url, text: title })}`
}

const HackerNewsShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(HACKERNEWS_NAME, generateHackerNewsLink(url, { title }), HackerNewsShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

HackerNewsShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default HackerNewsShareBtn
