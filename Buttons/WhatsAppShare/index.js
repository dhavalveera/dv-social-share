// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams, isMobileOrTablet } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { WhatsAppShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateWhatsAppLink = (url, { title, separator = " :: " }) => {
  return `https://${
    isMobileOrTablet() ? "api" : "web"
  }.whatsapp.com/send${generateQueryParams({
    text: title ? title + separator + url : url,
  })}`;
};

const WhatsAppShareBtn = ({ url, title, separator, openInNewTab }) =>
  MakeShareButton(
    "WhatsApp",
    generateWhatsAppLink(url, { title, separator }),
    WhatsAppShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

WhatsAppShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  separator: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default WhatsAppShareBtn;
