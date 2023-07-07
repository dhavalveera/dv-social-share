import { createElement } from "react";

// HackerNews Icon
import { TumblrShareIconBase64 } from "./TumblrShareBase64Icon";

const TumblrShareIcon = () => {
  return createElement("img", {
    src: TumblrShareIconBase64,
    alt: "Tumblr Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default TumblrShareIcon;
