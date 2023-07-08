// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { LineShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateLineLink = (url, { title }) => {
  return `https://social-plugins.line.me/lineit/share${generateQueryParams({
    url,
    text: title,
  })}`;
};

const LineShareBtn = ({ url, title, description, openInNewTab }) =>
  MakeShareButton(
    "Line",
    generateLineLink(url, { title, description }),
    LineShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

LineShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default LineShareBtn;
