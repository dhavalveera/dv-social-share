import { createElement } from "react";

// FB Share Icon
import { FBShareIconBase64 } from "./FBShareBase64Icon";

const FBShareIcon = () => {
  return createElement("img", {
    src: FBShareIconBase64,
    alt: "Facebook Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default FBShareIcon;
