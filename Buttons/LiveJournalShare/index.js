// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { LiveJournalShareIcon } from '../../icons'

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateLiveJournalLink = (url, { title }) => {
  return `https://www.livejournal.com/update.bml${generateQueryParams({ event: url, subject: title })}`
}

const LiveJournalShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton('LiveJournal', generateLiveJournalLink(url, { title }), LiveJournalShareIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

LiveJournalShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default LiveJournalShareBtn
