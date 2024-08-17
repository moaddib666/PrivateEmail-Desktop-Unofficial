# PrivateEmail Desktop - Unofficial !

![PrivateEmail Desktop Unofficial](assets/icons/private-email-icon-filled-256.png)

**PrivateEmail Desktop Unofficial** is a simple desktop application that provides a dedicated browser for [PrivateEmail](https://privateemail.com/), built using [Electron](https://www.electronjs.org/). This application is intended for fans who want a standalone desktop experience for their PrivateEmail account.

## Disclaimer

This is an unofficial application and is not affiliated, endorsed, or supported by PrivateEmail or its parent companies in any way. The application is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. Use it at your own risk.

## Features

- Provides a dedicated desktop environment for accessing PrivateEmail.
- Built using Electron, ensuring cross-platform compatibility.
- Lightweight and focused solely on delivering the PrivateEmail web interface.

## Installation

### Windows

1. Download the latest `app-windows.zip` file from the [releases section](https://github.com/moaddib666/PrivateEmail-Desktop-Unofficial/releases).
2. Extract the contents.
3. Run `PrivateEmail Desktop Unofficial.exe`.

### macOS

1. Download the latest `app-macos.zip` file from the [releases section](https://github.com/moaddib666/PrivateEmail-Desktop-Unofficial/releases).
2. Extract the `.app` file from the zip.
3. Move the `.app` file to your `Applications` folder.
4. Open the app from your `Applications` folder.

### Linux

1. Download the latest `app-linux.zip` file from the [releases section](https://github.com/moaddib666/PrivateEmail-Desktop-Unofficial/releases).
2. Extract the `.AppImage` file.
3. Make it executable:
   ```bash
   chmod +x PrivateEmailDesktopUnofficial.AppImage
   ```
4. Run the `.AppImage` file.

## Development

If you want to modify or build the application yourself, follow these steps:

### Prerequisites

- [Node.js v20.12.0](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/moaddib666/PrivateEmail-Desktop-Unofficial/privateemail-desktop-unofficial.git
   cd privateemail-desktop-unofficial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application in development mode:
   ```bash
   npm start
   ```

### Building

To build the application for all platforms:

```bash
npm run make
```

The builds will be available in the `out` directory.
