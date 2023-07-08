// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { LinkedInShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateLinkedInLink = (url, { title, summary, source }) => {
  return `https://linkedin.com/sharing/share-offsite${generateQueryParams({
    url,
    mini: "true",
    title,
    summary,
    source,
  })}`;
};

const LinkedInShareBtn = ({ url, title, summary, source, openInNewTab }) =>
  MakeShareButton(
    "LinkedIn",
    generateLinkedInLink(url, { title, summary, source }),
    LinkedInShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

LinkedInShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  source: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default LinkedInShareBtn;
