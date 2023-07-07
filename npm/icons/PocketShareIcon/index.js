import { createElement } from "react";

// HackerNews Icon
import { PocketShareIconBase64 } from "./PocketShareBase64Icon";

const PocketShareIcon = () => {
  return createElement("img", {
    src: PocketShareIconBase64,
    alt: "Pocket Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default PocketShareIcon;
