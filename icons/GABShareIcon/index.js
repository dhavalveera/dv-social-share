import { createElement } from "react";

// GAB Icon
import { GABShareIconBase64 } from "./GABShareBase64Icon";

const GABShareIcon = () => {
  return createElement("img", {
    src: GABShareIconBase64,
    alt: "GAB Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default GABShareIcon;
