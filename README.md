# dv-social-share

---

Social media share buttons for your next React.js, Next.js apps.

# 🎁 Features

---

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
