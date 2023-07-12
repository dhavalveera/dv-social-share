// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { BufferIcon } from "../../icons";

// Constants
import { openShareDialogOnClick } from "../../constants";

const generateBufferLink = (url, { title }) => {
  return `https://publish.buffer.com/compose${generateQueryParams({
    text: title,
    url,
  })}`;
};

const BufferShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Buffer",
    generateBufferLink(url, { title }),
    BufferIcon,
    openInNewTab || openShareDialogOnClick
  );

BufferShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default BufferShareBtn;
