import { createElement } from "react";

// HackerNews Icon
import { SnapChatBase64Icon } from "./SnapChatBase64Icon";

const SnapChatShareIcon = () => {
  return createElement("img", {
    src: SnapChatBase64Icon,
    alt: "SnapChat Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default SnapChatShareIcon;
