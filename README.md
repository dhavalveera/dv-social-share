# dv-social-share

---

Social media share buttons for your next React.js, Next.js apps.

# 🎁 Features

---

- No dependencies
- Share buttons for your next React.js & Next.js app
  - Email
  - Facebook Messanger
  - Facebook
  - GAB
  - HackerNews
  - Instapaper
  - Line
  - LinkedIn
  - Pinterest
  - Pocket
  - Reddit
  - Telegram
  - Tumblr
  - Twitter
  - VK
  - WhatsApp

# ⚙ Install

---

dv-social-share is available on npm. It can be installed with the either following command:

```cmd
npm install dv-social-share --save
```

or

```cmd
yarn add dv-social-share --save
```

# 💡 Usage

---

## EmailShare

--

#### 👨‍💻 Code

```js
import { EmailShareBtn } from "dv-social-share";
<EmailShareBtn url="https://dv-social-share.vercel.app" />;
```

#### 📖 EmailShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| subject      | string  |         | A subject to be shared.                          | ❌       |
| body         | string  |         | Body to be shared.                               | ❌       |
| separator    | string  | ::      |                                                  | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## FBMessangerShare

--

#### 👨‍💻 Code

```js
import { FBMessangerShareBtn } from "dv-social-share";
<FBMessangerShareBtn url="https://dv-social-share.vercel.app" appId="" />;
```

#### 📖 FBMessangerShareBtn Props

| Props        | Type    | Default | Description                                                                                                 | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                           | ✅       |
| appId        | string  |         | Facebook application id.                                                                                    | ✅       |
| redirectUri  | string  |         | The URL to redirect to after sharing (default: the shared url).                                             | ❌       |
| to           | string  |         | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                            | ❌       |

---

## FBShare

--

#### 👨‍💻 Code

```js
import { FBShareBtn } from "dv-social-share";
<FBShareBtn
  url="https://dv-social-share.vercel.app"
  quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
  hashTag="#dvsocialshare"
/>;
```

#### 📖 FBShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| quote        | string  |         | A quote to be shared.                            | ❌       |
| hashTag      | string  |         | Hashtag to be shared.                            | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## GABShare

--

#### 👨‍💻 Code

```js
import { GABShareBtn } from "dv-social-share";
<GABShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 GABShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## HackerNewsShare

--

#### 👨‍💻 Code

```js
import { HackerNewsShareBtn } from "dv-social-share";
<HackerNewsShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 HackerNewsShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## InstapaperShare

--

#### 👨‍💻 Code

```js
import { InstapaperShareBtn } from "dv-social-share";
<InstapaperShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 InstapaperShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| description  | string  |         | Description to be shared.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## LineShare

--

#### 👨‍💻 Code

```js
import { LineShareBtn } from "dv-social-share";
<LineShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 LineShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## LinkedInShare

--

#### 👨‍💻 Code

```js
import { LinkedInShareBtn } from "dv-social-share";
<LinkedInShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 LinkedInShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| summary      | string  |         | Summary of the shared page.                      | ❌       |
| source       | string  |         | Source of the shared page.                       | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## PinterestShare

--

#### 👨‍💻 Code

```js
import { PinterestShareBtn } from "dv-social-share";
<PinterestShareBtn
  url="https://dv-social-share.vercel.app"
  media="https://dv-social-share.vercel.app/image.svg"
/>;
```

#### 📖 PinterestShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                       | ✅       |
| media        | string  |         | The image URL that will be pinned.               | ✅       |
| description  | string  |         | The description of the shared media.             | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## PocketShare

--

#### 👨‍💻 Code

```js
import { PocketShareBtn } from "dv-social-share";
<PocketShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 PocketShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                       | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## RedditShare

--

#### 👨‍💻 Code

```js copy
import { RedditShareBtn } from "dv-social-share";
<RedditShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 RedditShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                       | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## TelegramShare

--

#### 👨‍💻 Code

```js copy
import { TelegramShareBtn } from "dv-social-share";
<TelegramShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 TelegramShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                       | ✅       |
| title        | string  |         | Title of the shared page.                        | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## TumblrShare

--

#### 👨‍💻 Code

```js copy
import { TumblrShareBtn } from "dv-social-share";
<TumblrShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 TumblrShareBtn Props

| Props        | Type    | Default           | Description                                      | Required |
| :----------- | :------ | :---------------- | :----------------------------------------------- | :------- |
| url          | string  |                   | The URL of the shared page to be shared.         | ✅       |
| title        | string  |                   | The title of the shared page.                    | ❌       |
| tags         | Array   |                   |                                                  | ❌       |
| caption      | string  |                   | The description of the shared page.              | ❌       |
| posttype     | string  | <code>link</code> |                                                  | ❌       |
| openInNewTab | boolean | false             | Open share window in a new tab if set to `true`. | ❌       |

---

## TwitterShare

--

#### 👨‍💻 Code

```js copy
import { TwitterShareBtn } from "dv-social-share";
<TwitterShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 TwitterShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared page to be shared.         | ✅       |
| title        | string  |         | The title of the shared page.                    | ❌       |
| via          | string  |         |                                                  | ❌       |
| hashtags     | array   |         |                                                  | ❌       |
| related      | array   |         |                                                  | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## VKShare

--

#### 👨‍💻 Code

```js copy
import { VKShareBtn } from "dv-social-share";
<VKShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 VKShareBtn Props

| Props        | Type    | Default | Description                                                                                                  | Required |
| :----------- | :------ | :------ | :----------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared pageto be shared.                                                                      | ✅       |
| title        | string  |         | The title of the shared page.                                                                                | ❌       |
| image        | string  |         | An absolute link to the image that will be shared.                                                           | ❌       |
| noParse      | boolean |         | If true is passed, VK will not retrieve URL information.                                                     | ❌       |
| noVkLinks    | boolean |         | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices. | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                             | ❌       |

---

## WhatsAppShare

--

#### 👨‍💻 Code

```js copy
import { WhatsAppShareBtn } from "dv-social-share";
<WhatsAppShareBtn
  url="https://dv-social-share.vercel.app"
  title="dv-social-share is a social share buttons for your next React.js & Next.js apps."
/>;
```

#### 📖 WhatsAppShareBtn Props

| Props        | Type    | Default | Description                                      | Required |
| :----------- | :------ | :------ | :----------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared page to be shared.         | ✅       |
| title        | string  |         | The title of the shared page.                    | ❌       |
| separator    | string  |         |                                                  | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`. | ❌       |

---

## 💖 Wrap Up

If you think any of the `dv-social-share` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `dv-social-share` by forking and sending a pull request!

Your contributions are welcome.

How to contribute:

- Fork the `dv-social-share` Repo
- Create a New Branch from `main`
- Push the Code in your branc and
- Open pull request with improvements & more information on it
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
