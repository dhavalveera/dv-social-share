import { createElement } from "react";

// HackerNews Icon
import { PinterestShareIconBase64 } from "./PinterestShareBase64Icon";

const PinterestShareIcon = () => {
  return createElement("img", {
    src: PinterestShareIconBase64,
    alt: "Pinterest Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default PinterestShareIcon;
