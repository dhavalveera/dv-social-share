// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { VKShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateVKLink = (url, { title, image, noParse, noVkLinks }) => {
  return `https://vk.com/share.php${generateQueryParams({
    url,
    title,
    image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0,
  })}`;
};

const VKShareBtn = ({ url, title, image, noParse, noVkLinks, openInNewTab }) =>
  MakeShareButton(
    "VK",
    generateVKLink(url, { title, image, noParse, noVkLinks }),
    VKShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

VKShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  noParse: PropTypes.bool,
  noVkLinks: PropTypes.bool,
  openInNewTab: PropTypes.bool,
};

export default VKShareBtn;
