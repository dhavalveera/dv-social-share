import { createElement } from "react";

// HackerNews Icon
import { WhatsAppShareIconBase64 } from "./WhatsAppShareBase64Icon";

const WhatsAppShareIcon = () => {
  return createElement("img", {
    src: WhatsAppShareIconBase64,
    alt: "WhatsApp Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default WhatsAppShareIcon;
