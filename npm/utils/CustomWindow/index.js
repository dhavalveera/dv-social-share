export const CustomWindow = (
  url,
  { height, width, ...configRest },
  blankTarget
) => {
  const config = {
    height,
    width,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "yes",
    centerscreen: "yes",
    chrome: "yes",
    ...configRest,
  };

  let dialog;

  if (blankTarget) {
    dialog = window.open(url, "_blank");
  } else {
    dialog = window.open(
      url,
      "",
      Object.keys(config)
        .map((key) => `${key}=${config[key]}`)
        .join(", ")
    );
  }

  return dialog;
};
