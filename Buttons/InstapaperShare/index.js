// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { InstaPaperShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateInstapaperLink = (url, { title, description }) => {
  return `http://www.instapaper.com/hello2${generateQueryParams({
    url,
    title,
    description,
  })}`;
};

const InstapaperShareBtn = ({ url, title, description, openInNewTab }) =>
  MakeShareButton(
    "Instapaper",
    generateInstapaperLink(url, { title, description }),
    InstaPaperShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

InstapaperShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default InstapaperShareBtn;
