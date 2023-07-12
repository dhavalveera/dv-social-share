import { createElement } from "react";

// FB Share Icon
import { FlipboardShareBase64Icon } from "./FlipboardShareBase64Icon";

const FlipboardShareIcon = () => {
  return createElement("img", {
    src: FlipboardShareBase64Icon,
    alt: "Flipboard Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default FlipboardShareIcon;
