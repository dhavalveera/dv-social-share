// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { GABShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateGABLink = (url, { title }) => {
  return `https://gab.com/compose${generateQueryParams({
    url,
    text: title,
  })}`;
};

const GABShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "GAB",
    generateGABLink(url, { title }),
    GABShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

GABShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default GABShareBtn;
