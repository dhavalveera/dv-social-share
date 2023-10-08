type DefaultImgConfigObj = { width: number; height: number; bgColor: string }
type DefaultButtonStyleObj = { border: string; background: string }

export const openShareDialogOnClick: boolean = true
export const dontOpenShareDialogOnClick: boolean = false
export const defaultImgConfig: DefaultImgConfigObj = { width: 32, height: 32, bgColor: 'transparent' }
export const defaultButtonStyle: DefaultButtonStyleObj = { border: 'none', background: 'transparent' }

export * from './ButtonNames'
export * from './UI'
