// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { PocketShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generatePocketLink = (url, { title }) => {
  return `https://getpocket.com/save${generateQueryParams({ url, title })}`;
};

const PocketShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Pocket",
    generatePocketLink(url, { title }),
    PocketShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

PocketShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default PocketShareBtn;
