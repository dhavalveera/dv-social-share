// Utils
import { generateQueryParams } from "../../utils";

// Make Share Button => Contains Main logic
import MakeShareButton from "../../ShareButton";

// Icon
import { FBMessangerIcon } from "../../icons";

// Constants
import { openShareDialogOnClick } from "../../constants";

const generateFBMessangerLink = (url, { appId, redirectUri, to }) => {
  return `https://www.facebook.com/dialog/send${generateQueryParams({
    link: url,
    redirect_uri: redirectUri || url,
    app_id: appId,
    to,
  })}`;
};

const FBMessangerShareBtn = ({ url, appId, redirectUri, to, openInNewTab }) =>
  MakeShareButton(
    "Email",
    generateFBMessangerLink(url, { appId, redirectUri, to }),
    FBMessangerIcon,
    openInNewTab || openShareDialogOnClick
  );

export default FBMessangerShareBtn;
