import { createElement } from "react";

// HackerNews Icon
import { InstapaperShareIconBase64 } from "./InstaPaperShareBase64Icon";

const InstaPaperShareIcon = () => {
  return createElement("img", {
    src: InstapaperShareIconBase64,
    alt: "InstaPaper Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default InstaPaperShareIcon;
