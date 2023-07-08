// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { HackerNewsShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateHackerNewsLink = (url, { title }) => {
  return `http://news.ycombinator.com/submitlink${generateQueryParams({
    url,
    text: title,
  })}`;
};

const HackerNewsShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "HackerNews",
    generateHackerNewsLink(url, { title }),
    HackerNewsShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

HackerNewsShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default HackerNewsShareBtn;
