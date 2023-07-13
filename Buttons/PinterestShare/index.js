// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { PinterestShareIcon } from "../../icons";

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from "../../constants";

const generatePinterestLink = (url, { media, description }) => {
  return `https://pinterest.com/pin/create/button/${generateQueryParams({
    url,
    media,
    description,
  })}`;
};

const PinterestShareBtn = ({
  url,
  media,
  description,
  openInNewTab,
  imgConfig,
}) =>
  MakeShareButton(
    "Pinterest",
    generatePinterestLink(url, { media, description }),
    PinterestShareIcon,
    openInNewTab || dontOpenShareDialogOnClick,
    imgConfig || defaultImgConfig
  );

PinterestShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  description: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
};

export default PinterestShareBtn;
