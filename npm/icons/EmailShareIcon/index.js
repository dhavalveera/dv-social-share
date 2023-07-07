// React
import { createElement } from "react";

// Email Icon
import { emailIconBase64 } from "./emailShareIconBase64";

const EmailIcon = () => {
  return createElement("img", {
    src: emailIconBase64,
    alt: "Email Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default EmailIcon;
