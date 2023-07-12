// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { FlipboardShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateFlipboardLink = (url, { title }) => {
  return `https://share.flipboard.com/bookmarklet/popout${generateQueryParams({
    v: 2,
    title,
    url,
  })}`;
};

const FlipboardShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Flipboard",
    generateFlipboardLink(url, { title }),
    FlipboardShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

FlipboardShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default FlipboardShareBtn;
