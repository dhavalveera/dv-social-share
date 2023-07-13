// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { DiggIcon } from "../../icons";

// Constants
import { defaultImgConfig, dontOpenShareDialogOnClick } from "../../constants";

const generateDiggLink = (url, { title }) => {
  return `http://digg.com/submit${generateQueryParams({
    url,
    title,
  })}`;
};

const DiggShareBtn = ({ url, title, openInNewTab, imgConfig }) =>
  MakeShareButton(
    "Digg",
    generateDiggLink(url, { title }),
    DiggIcon,
    openInNewTab || dontOpenShareDialogOnClick,
    imgConfig || defaultImgConfig
  );

DiggShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
  imgConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
  }),
};

export default DiggShareBtn;
