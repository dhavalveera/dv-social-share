// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { PinboardShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generatePinboardLink = (url, { title, description }) => {
  return `https://pinboard.in/add${generateQueryParams({
    url,
    title,
    description,
  })}`;
};

const PinboardShareBtn = ({ url, title, description, openInNewTab }) =>
  MakeShareButton(
    "Pinboard",
    generatePinboardLink(url, { title, description }),
    PinboardShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

PinboardShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default PinboardShareBtn;
