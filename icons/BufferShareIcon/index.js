// React
import { createElement } from "react";

// Email Icon
import { BufferShareBase64Icon } from "./BufferShareBase64Icon";

const BufferIcon = () => {
  return createElement("img", {
    src: BufferShareBase64Icon,
    alt: "Buffer Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default BufferIcon;
