import { createElement } from "react";

// HackerNews Icon
import { VKShareIconBase64 } from "./VKShareBase64Icon";

const VKShareIcon = () => {
  return createElement("img", {
    src: VKShareIconBase64,
    alt: "VK Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default VKShareIcon;
