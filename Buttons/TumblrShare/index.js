// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { TumblrShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateTumblrLink = (url, { title, caption, tags, postTypes }) => {
  return `https://www.tumblr.com/widgets/share/tool${generateQueryParams({
    url,
    text: title,
    caption,
    tags,
    postTypes,
  })}`;
};

const TumblrShareBtn = ({
  url,
  title,
  caption,
  tags,
  postTypes,
  openInNewTab,
}) =>
  MakeShareButton(
    "Tumblr",
    generateTumblrLink(url, { title, caption, tags, postTypes }),
    TumblrShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

TumblrShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
  tags: PropTypes.array,
  postTypes: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default TumblrShareBtn;
