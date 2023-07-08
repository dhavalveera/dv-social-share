// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { RedditShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateRedditLink = (url, { title }) => {
  return `https://www.reddit.com/submit${generateQueryParams({ url, title })}`;
};

const RedditShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Reddit",
    generateRedditLink(url, { title }),
    RedditShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

RedditShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default RedditShareBtn;
