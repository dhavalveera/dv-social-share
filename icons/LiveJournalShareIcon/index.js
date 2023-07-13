import { createElement } from "react";

// HackerNews Icon
import { LiveJournalBase64Icon } from "./LiveJournalShareBase64Icon";

const LiveJournalShareIcon = () => {
  return createElement("img", {
    src: LiveJournalBase64Icon,
    alt: "LiveJournal Icon",
    width: 32,
    height: 32,
    style: {
      cursor: "pointer",
      backgroundColor: "transparent",
      mixBlendMode: "darken",
    },
  });
};

export default LiveJournalShareIcon;
