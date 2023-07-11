// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { SnapChatShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateRedditLink = (url) => {
  return `https://snapchat.com/scan${generateQueryParams({
    attachmentUrl: url,
  })}`;
};

const SnapchatShareBtn = ({ url, openInNewTab }) =>
  MakeShareButton(
    "Snapchat",
    generateRedditLink(url),
    SnapChatShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

SnapchatShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
};

export default SnapchatShareBtn;
