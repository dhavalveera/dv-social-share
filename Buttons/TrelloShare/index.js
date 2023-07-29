// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { TrelloShareIcon } from '../../icons'

// Constants
import { TRELLO_NAME, defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateTrelloLink = (url, { desc }) => {
  return `https://trello.com/add-card${generateQueryParams({ mode: 'popup', url, desc })}`
}

const TrelloShareBtn = ({ url, desc, openInNewTab, imgConfig }) =>
  MakeShareButton(TRELLO_NAME, generateTrelloLink(url, { desc }), TrelloShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

TrelloShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  desc: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default TrelloShareBtn
