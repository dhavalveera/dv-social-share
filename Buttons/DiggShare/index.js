// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { DiggIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateDiggLink = (url, { title }) => {
  return `http://digg.com/submit${generateQueryParams({
    url,
    title,
  })}`;
};

const DiggShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Digg",
    generateDiggLink(url, { title }),
    DiggIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

DiggShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default DiggShareBtn;
