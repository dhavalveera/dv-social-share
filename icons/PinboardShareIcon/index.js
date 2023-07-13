import { createElement } from "react";

// HackerNews Icon
import { PinboardBase64Icon } from "./PinboardBase64Icon";

const PinboardShareIcon = () => {
  return createElement("img", {
    src: PinboardBase64Icon,
    alt: "Pinboard Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default PinboardShareIcon;
