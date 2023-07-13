// PropTypes
import PropTypes from 'prop-types'

// Utils
import { generateQueryParams } from '../../utils'

// Make Share Button => Contains Main logic
import MakeShareButton from '../../ShareButton'

// Icon
import { BufferIcon } from '../../icons'

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from '../../constants'

const generateBufferLink = (url, { title }) => {
  return `https://publish.buffer.com/compose${generateQueryParams({ text: title, url })}`
}

const BufferShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton('Buffer', generateBufferLink(url, { title }), BufferIcon, openInNewTab || dontOpenShareDialogOnClick, imgConfig || defaultImgConfig)

BufferShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
}

export default BufferShareBtn
