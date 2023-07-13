// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { FlipboardShareIcon } from "../../icons";

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from "../../constants";

const generateFlipboardLink = (url, { title }) => {
  return `https://share.flipboard.com/bookmarklet/popout${generateQueryParams({
    v: 2,
    title,
    url,
  })}`;
};

const FlipboardShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(
    "Flipboard",
    generateFlipboardLink(url, { title }),
    FlipboardShareIcon,
    openInNewTab || dontOpenShareDialogOnClick,
    imgConfig || defaultImgConfig
  );

FlipboardShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
};

export default FlipboardShareBtn;
