import { createElement } from "react";

// HackerNews Icon
import { HackerNewsShareIconBase64 } from "./HackerNewsBase64Icon";

const HackerNewsShareIcon = () => {
  return createElement("img", {
    src: HackerNewsShareIconBase64,
    alt: "HackerNews Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default HackerNewsShareIcon;
