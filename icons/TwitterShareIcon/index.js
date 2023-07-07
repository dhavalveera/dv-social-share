import { createElement } from "react";

// HackerNews Icon
import { TwitterShareIconBase64 } from "./TwitterShareBase64Icon";

const TwitterShareIcon = () => {
  return createElement("img", {
    src: TwitterShareIconBase64,
    alt: "Twitter Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default TwitterShareIcon;
