type CustomWindowObjProps = {
  height: number
  width: number
  [key: string]: any
}

type ConfigProps = { [key: string]: string | number }

export const CustomWindow = (url: string, { height, width, ...configRest }: CustomWindowObjProps, blankTarget?: boolean) => {
  const config: ConfigProps = {
    height,
    width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'yes',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  }

  let dialog

  if (blankTarget) {
    dialog = window.open(url, '_blank')
  } else {
    dialog = window.open(
      url,
      '',
      Object.keys(config)
        .map(key => `${key}=${config[key]}`)
        .join(', '),
    )
  }

  return dialog
}
