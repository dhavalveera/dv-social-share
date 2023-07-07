import { createElement } from "react";

// FB Messanger Icon
import { FBMessangerIconBase64 } from "./FBMessangerBase64Icon";

const FBMessangerIcon = () => {
  return createElement("img", {
    src: FBMessangerIconBase64,
    alt: "Facebok Messanger Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default FBMessangerIcon;
