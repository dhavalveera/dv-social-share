// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { InstaPaperShareIcon } from "../../icons";

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from "../../constants";

const generateInstapaperLink = (url, { title, description }) => {
  return `http://www.instapaper.com/hello2${generateQueryParams({
    url,
    title,
    description,
  })}`;
};

const InstapaperShareBtn = ({
  url,
  title,
  description,
  openInNewTab,
  imgConfig,
}) =>
  MakeShareButton(
    "Instapaper",
    generateInstapaperLink(url, { title, description }),
    InstaPaperShareIcon,
    openInNewTab || dontOpenShareDialogOnClick,
    imgConfig || defaultImgConfig
  );

InstapaperShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
};

export default InstapaperShareBtn;
