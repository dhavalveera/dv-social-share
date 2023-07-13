// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { RefindShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateRefindLink = (url) => {
  return `https://refind.com/${generateQueryParams({ url })}`;
};

const RefindShareBtn = ({ url, openInNewTab }) =>
  MakeShareButton(
    "Refind",
    generateRefindLink(url),
    RefindShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

RefindShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
};

export default RefindShareBtn;
