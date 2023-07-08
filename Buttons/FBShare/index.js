// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { FBShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateFBLink = (url, { quote, hashTags }) => {
  return `https://www.facebook.com/sharer/sharer.php${generateQueryParams({
    u: url,
    quote,
    hashTags,
  })}`;
};

const FBShareBtn = ({ url, quote, hashTags, openInNewTab }) =>
  MakeShareButton(
    "Facebook",
    generateFBLink(url, { quote, hashTags }),
    FBShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

FBShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  quote: PropTypes.string,
  hashTag: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default FBShareBtn;
