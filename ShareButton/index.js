import { createElement } from "react";

// Utils
import { CustomWindow, getCenterPosition } from "../utils";

const MakeShareButton = (name, url, Icon, openShareDialogOnClick) => {
  const handleOnClick = (e) => {
    e.preventDefault();

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(url, windowConfig, openShareDialogOnClick);
  };

  return createElement(
    "button",
    {
      type: "button",
      "aria-label": `Share-${name}`,
      onClick: handleOnClick,
      style: { border: "none", background: "transparent" },
    },
    createElement(Icon, {
      width: 32,
      height: 32,
      "aria-label": `${name}Icon`,
    })
  );
};

export default MakeShareButton;
