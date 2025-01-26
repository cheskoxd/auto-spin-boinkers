
# 🎡 Auto Wheel - Chrome Extension

Automate spins on Boinkers.co with this Chrome extension. This project is designed to save time and maximize rewards by automating the spinning process on the Boinkers.co daily wheel.

---

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup](#setup)
4. [Development](#development)
5. [Build](#build)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Automated Spinning**: Automates the spinning process with customizable bet multipliers and spin counts.
- **Infinite Spins**: Supports infinite spinning until manually stopped or energy runs out.
- **Real-Time Updates**: Tracks spins, energy usage, and prize values in real-time.
- **Current Multiplier**: Displays the current bet multiplier from the API response.
- **Energy Management**: Automatically stops when energy is insufficient.
- **User-Friendly UI**: A sidebar interface for easy control and monitoring.

---

## Project Structure

```
auto-wheel-extension/
├── manifest.json          # Chrome extension manifest file
├── content.js             # Content script for injecting UI and handling logic
├── README.md              # This file
├── icons/                 # Extension icons
│   ├── icon16.png         # 16x16 icon
│   ├── icon32.png         # 32x32 icon
│   ├── icon48.png         # 48x48 icon
│   └── icon128.png        # 128x128 icon
```

---

## Setup

### Prerequisites
- **Google Chrome** (or any Chromium-based browser)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/cheskoxd/auto-wheel-extension.git
   cd auto-wheel-extension
   ```

2. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the `auto-wheel-extension` directory.

3. Navigate to [Boinkers.co](https://boink.boinkers.co/daily-wheel) and start using the extension.

---

## Development

### Key Files
- **`manifest.json`**: Defines the extension's metadata, permissions, and scripts.
- **`content.js`**: Injects the sidebar UI and handles the spinning logic.

### Workflow
1. Make changes to the `content.js` or other files.
2. Reload the extension in `chrome://extensions/` to apply changes.
3. Test the changes on [Boinkers.co](https://boink.boinkers.co/daily-wheel).

### Debugging
- Use the **Chrome DevTools** to debug the content script:
  - Right-click on the page and select **Inspect**.
  - Go to the **Console** tab to view logs and errors.

---

## Build

### Packaging the Extension
1. Open `chrome://extensions/`.
2. Click **Pack extension**.
3. Select the `auto-wheel-extension` directory.
4. Chrome will generate a `.crx` file and a `.pem` private key.

### Distributing the Extension
- Upload the `.crx` file to the Chrome Web Store or share it directly with users.

---

## Contributing

Contributions are welcome! Here’s how you can help:

1. **Fork the repository**.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature or fix"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** and describe your changes.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Boinkers.co** for the platform and API.

---

## Support the Developer

If you find this extension useful, consider supporting the developer (me lol):

- **Bitcoin (BTC)**: `1Dq4QPHCQbu3eVvZs36K9qp6j29hrTRr25`
- **TON**: `UQD17Qldny20GtPZT2nMRrKZ3Zvlj1Wvzu3xtroZHQ9IDtsr`
- **PayPal**: [Donate via PayPal](https://paypal.me/cheskoxd)

---

Happy spinning! 🎉
