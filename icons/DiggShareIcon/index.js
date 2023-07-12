// React
import { createElement } from "react";

// Email Icon
import { DiggShareBase64Icon } from "./DiggShareBase64Icon";

const DiggIcon = () => {
  return createElement("img", {
    src: DiggShareBase64Icon,
    alt: "Diff Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default DiggIcon;
