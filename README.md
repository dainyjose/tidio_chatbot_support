# Tidio Chatbot Support

This repository demonstrates how to use the **Tidio Chat Widget** inside a **mobile application** to provide real-time live chat and chatbot support.  
The widget is embedded using a `WebView`, making it easy to bring Tidio’s customer support features into any React Native or Expo project.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Description
The **Tidio Chatbot Support (Mobile)** project shows how to integrate Tidio’s chatbot into mobile apps.  
Instead of limiting Tidio to websites, this example lets users **chat directly inside the app** via a simple embedded widget.

## Features


- Tidio Chat Integration: Seamlessly integrates the Tidio live chat and chatbot widget into the mobile application.

- **Customer Support:** Enables real-time customer support directly within the app, leveraging Tidio's live chat capabilities.

- **Automated Interactions:** Utilizes Tidio's chatbot features (including AI-powered Lyro) for automated responses, FAQ handling, and lead generation.

- **Customization:** Provides a foundation for customizing the Tidio widget's appearance and behavior within the React Native environment.

## Tech Stack
- React Native / Expo
- WebView (for embedding Tidio)
- Tidio Chat Widget

## Prerequisites
- [Node.js](https://nodejs.org/) and npm or yarn installed
- React Native or Expo project setup
- A [Tidio account](https://www.tidio.com/) to generate your unique script key

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/dainyjose/tidio_chatbot_support.git
   cd tidio_chatbot_support
   ```
2. Install dependencies:
```bash
bun install
```
3. Run the project:
   ```bash
   bun expo run:android   # For Android
   bun expo run:ios       # For iOS
   bun expo start         # Metro bundler
   ```
## Usage

1. Add the Tidio script inside your WebView:
   
```bash
import React from "react";
import { WebView } from "react-native-webview";

export default function TidioChat() {
  return (
    <WebView
      source={{ uri: "https://yourwebsite.com/tidio.html" }}
      style={{ flex: 1 }}
    />
  );
}

```
2. Replace the script key in your tidio.html file with your own:
   ```bash
   <script src="//code.tidio.co/YOUR_UNIQUE_KEY.js" async></script>
    ```

3. Launch the app and you’ll see the Tidio chat widget inside your mobile app.

---

## Related Repositories

- [tidio-widget](https://github.com/dainyjose/tidio-widget..git)

-----


## 🧑‍💻 Author

**Dainy Jose**  
[GitHub](https://github.com/dainyjose) | [LinkedIn](https://linkedin.com/in/dainyjose)

---

## License

[MIT](./LICENSE)
