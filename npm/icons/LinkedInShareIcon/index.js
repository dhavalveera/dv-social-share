import { createElement } from "react";

// HackerNews Icon
import { LinkedInShareIconBase64 } from "./LinkedInShareBase64Icon";

const LinkedInShareIcon = () => {
  return createElement("img", {
    src: LinkedInShareIconBase64,
    alt: "LinkedIn Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default LinkedInShareIcon;
