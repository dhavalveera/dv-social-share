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
      title: name,
      onClick: handleOnClick,
      style: { border: "none", background: "transparent" },
    },
    createElement("img", {
      src: Icon,
      alt: `${name} Icon`,
      "aria-label": `${name}Icon`,
      width: 32,
      height: 32,
      style: {
        cursor: "pointer",
        backgroundColor: "transparent",
        mixBlendMode: "darken",
      },
    })
  );
};

export default MakeShareButton;
