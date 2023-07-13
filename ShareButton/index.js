import { createElement } from "react";

// Utils
import { CustomWindow, getCenterPosition } from "../utils";

const MakeShareButton = (
  name,
  url,
  Icon,
  openShareDialogOnClick,
  imgConfig
) => {
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
      width: imgConfig.width === 32 ? 32 : imgConfig.width,
      height: imgConfig.height === 32 ? 32 : imgConfig.height,
      style: {
        cursor: "pointer",
        backgroundColor:
          imgConfig.bgColor === "transparent"
            ? "transparent"
            : imgConfig.bgColor,
        mixBlendMode:
          imgConfig.bgColor === "transparent" ? "darken" : "color-burn",
      },
    })
  );
};

export default MakeShareButton;
