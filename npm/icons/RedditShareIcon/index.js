import { createElement } from "react";

// HackerNews Icon
import { RedditShareIconBase64 } from "./RedditShareBase64Icon";

const RedditShareIcon = () => {
  return createElement("img", {
    src: RedditShareIconBase64,
    alt: "Reddit Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default RedditShareIcon;
