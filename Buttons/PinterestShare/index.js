// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { PinterestShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generatePinterestLink = (url, { media, description }) => {
  return `https://pinterest.com/pin/create/button/${generateQueryParams({
    url,
    media,
    description,
  })}`;
};

const PinterestShareBtn = ({ url, media, description, openInNewTab }) =>
  MakeShareButton(
    "Pinterest",
    generatePinterestLink(url, { media, description }),
    PinterestShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

PinterestShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  media: PropTypes.string,
  description: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default PinterestShareBtn;
