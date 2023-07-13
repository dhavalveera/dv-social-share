import { createElement } from "react";

// HackerNews Icon
import { RefindShareBase64Icon } from "./RefindShareBase64Icon";

const RefindShareIcon = () => {
  return createElement("img", {
    src: RefindShareBase64Icon,
    alt: "Refind Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default RefindShareIcon;
