// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { TwitterShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateTwitterLink = (
  url,
  { title, via, hashTags = [], related = [] }
) => {
  return `https://twitter.com/intent/tweet${generateQueryParams({
    url,
    text: title,
    via,
    hashtags: hashTags.length > 0 ? hashTags.join(",") : undefined,
    related: related.length > 0 ? related.join(",") : undefined,
  })}`;
};

const TwitterShareBtn = ({
  url,
  title,
  via,
  hashTags,
  related,
  openInNewTab,
}) =>
  MakeShareButton(
    "Twitter",
    generateTwitterLink(url, { title, via, hashTags, related }),
    TwitterShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

TwitterShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  via: PropTypes.string,
  hashTags: PropTypes.array,
  related: PropTypes.array,
  openInNewTab: PropTypes.bool,
};

export default TwitterShareBtn;
