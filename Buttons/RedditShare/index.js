// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { RedditShareIcon } from '../../icons'

// Constants
import { REDDIT_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateRedditLink = (url, { title }) => {
  return `https://www.reddit.com/submit${generateQueryParams({ url, title })}`
}

const RedditShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(REDDIT_NAME, generateRedditLink(url, { title }), RedditShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

RedditShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default RedditShareBtn
