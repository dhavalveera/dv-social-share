import { createElement } from "react";

// HackerNews Icon
import { LineShareIconBase64 } from "./LineShareBase64Icon";

const LineShareIcon = () => {
  return createElement("img", {
    src: LineShareIconBase64,
    alt: "Line Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default LineShareIcon;
