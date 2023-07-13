type BufferShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width: number
    height: number
    bgColor: string
  }
}

type DiggShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width: number
    height: number
    bgColor: string
  }
}

type EmailShareBtnProps = {
  url?: string
  subject?: string
  body?: string
  separator?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type FBMessangerShareBtnProps = {
  url?: string
  appId?: string
  redirectUri?: string
  to?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type FBShareBtnProps = {
  url?: string
  quote?: string
  hashTags?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type FlipboardShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type GABShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type HackerNewsShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type InstapaperShareBtnProps = {
  url?: string
  title?: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type LineShareBtnProps = {
  url?: string
  title?: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type LinkedInShareBtnProps = {
  url?: string
  title?: string
  summary?: string
  source?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type LiveJournalShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type PinboardShareBtnProps = {
  url?: string
  title?: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type PinterestShareBtnProps = {
  url?: string
  media?: string
  description?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type PocketShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type RedditShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type RefindShareBtnProps = {
  url?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type TelegramShareBtnProps = {
  url?: string
  title?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type TumblrShareBtnProps = {
  url?: string
  title?: string
  caption?: string
  tags?: string[]
  postTypes?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type TwitterShareBtnProps = {
  url?: string
  title?: string
  via?: string
  hashTags?: string[]
  related?: string[]
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type VKShareBtnProps = {
  url?: string
  title?: string
  image?: string
  noParse?: boolean
  noVkLinks?: boolean
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

type WhatsAppShareBtnProps = {
  url?: string
  title?: string
  separator?: string
  openInNewTab?: boolean
  imgConfig?: {
    width?: number
    height?: number
    bgColor?: string
  }
}

declare module 'dv-social-share' {
  import React from 'react'

  export function BufferShareBtn({ url, title, openInNewTab, imgConfig }: BufferShareBtnProps): React.ReactNode

  export function DiggShareBtn({ url, title, openInNewTab, imgConfig }: DiggShareBtnProps): React.ReactNode

  export function EmailShareBtn({ url, subject, body, separator, openInNewTab, imgConfig }: EmailShareBtnProps): React.ReactNode

  export function FBMessangerShareBtn({ url, appId, redirectUri, to, openInNewTab, imgConfig }: FBMessangerShareBtnProps): React.ReactNode

  export function FBShareBtn({ url, quote, hashTags, openInNewTab, imgConfig }: FBShareBtnProps): React.ReactNode

  export function FlipboardShareBtn({ url, title, openInNewTab, imgConfig }: FlipboardShareBtnProps): React.ReactNode

  export function GABShareBtn({ url, title, openInNewTab, imgConfig }: GABShareBtnProps): React.ReactNode

  export function HackerNewsShareBtn({ url, title, openInNewTab, imgConfig }: HackerNewsShareBtnProps): React.ReactNode

  export function InstapaperShareBtn({ url, title, description, openInNewTab, imgConfig }: InstapaperShareBtnProps): React.ReactNode

  export function LineShareBtn({ url, title, description, openInNewTab, imgConfig }: LineShareBtnProps): React.ReactNode

  export function LinkedInShareBtn({ url, title, summary, source, openInNewTab, imgConfig }: LinkedInShareBtnProps): React.ReactNode

  export function LiveJournalShareBtn({ url, title, openInNewTab, imgConfig }: LiveJournalShareBtnProps): React.ReactNode

  export function PinboardShareBtn({ url, title, description, openInNewTab, imgConfig }: PinboardShareBtnProps): React.ReactNode

  export function PinterestShareBtn({ url, media, description, openInNewTab, imgConfig }: PinterestShareBtnProps): React.ReactNode

  export function PocketShareBtn({ url, title, openInNewTab, imgConfig }: PocketShareBtnProps): React.ReactNode

  export function RedditShareBtn({ url, title, openInNewTab, imgConfig }: RedditShareBtnProps): React.ReactNode

  export function RefindShareBtn({ url, openInNewTab, imgConfig }: RefindShareBtnProps): React.ReactNode

  export function TelegramShareBtn({ url, title, openInNewTab, imgConfig }: TelegramShareBtnProps): React.ReactNode

  export function TumblrShareBtn({ url, title, caption, tags, postTypes, openInNewTab, imgConfig }: TumblrShareBtnProps): React.ReactNode

  export function TwitterShareBtn({ url, title, via, hashTags, related, openInNewTab, imgConfig }: TwitterShareBtnProps): React.ReactNode

  export function VKShareBtn({ url, title, image, noParse, noVkLinks, openInNewTab, imgConfig }: VKShareBtnProps): React.ReactNode

  export function WhatsAppShareBtn({ url, title, separator, openInNewTab, imgConfig }: WhatsAppShareBtnProps): React.ReactNode
}
