import { createElement } from "react";

// HackerNews Icon
import { TelegramShareIconBase64 } from "./TelegramShareBase64Icon";

const TelegramShareIcon = () => {
  return createElement("img", {
    src: TelegramShareIconBase64,
    alt: "Telegram Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default TelegramShareIcon;
