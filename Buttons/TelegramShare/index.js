// PropTypes
import PropTypes from "prop-types";

// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { TelegramShareIcon } from "../../icons";

// Constants
import { dontOpenShareDialogOnClick } from "../../constants";

const generateTelegramLink = (url, { title }) => {
  return `https://t.me/share/url${generateQueryParams({ url, title })}`;
};

const TelegramShareBtn = ({ url, title, openInNewTab }) =>
  MakeShareButton(
    "Telegram",
    generateTelegramLink(url, { title }),
    TelegramShareIcon,
    openInNewTab || dontOpenShareDialogOnClick
  );

TelegramShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  openInNewTab: PropTypes.bool,
};

export default TelegramShareBtn;
