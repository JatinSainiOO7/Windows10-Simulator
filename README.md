# 🪟 Windows 10 Web Simulator

![MIT License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-3.x-blue?logo=scss)

# A fully interactive and responsive simulation of the Windows 10 desktop, built using React, TypeScript, and SCSS. This project aims to recreate the classic Windows 10 experience all within the browser.

---

## 🗂 Project Structure (React-based)
```
/public
  - windows-bg.jpg
/src
  /components
      - Desktop.tsx
      - Taskbar.tsx
      - StartMenu.tsx
      - Window.tsx
      - FileExplorer.tsx
      - SettingsApp.tsx
  /hooks
  /utils
  App.tsx
  index.tsx

```


## 🧩 Features

- 🖥️ **Desktop Interface**
  - Desktop background and icons
  - Right-click context menu
- 🧭 **Start Menu**
  - App launcher with animated open/close
- 📌 **Taskbar**
  - Start button
  - Live digital clock
  - Running apps + pinned shortcuts
  - Volume control mock
- 🪟 **Window Management**
  - Openable, draggable, resizable windows
  - Minimize, maximize, and close functionality
  - Window focus management
- 📂 **File Explorer**
  - Simple folder and file layout
  - Mock folder navigation
- ⚙️ **Settings**
  - UI for toggling themes, layout mock options
- 📋 **Context Menus**
  - Desktop right-click with "New", "Refresh", etc.
- ⌨️ **Keyboard Shortcuts (coming soon)**
  - Win + D, Alt + Tab, etc.
- 🧱 **Multi-window Support**
  - Run multiple apps simultaneously
- 🌙 **Theme Toggle**
  - Light and dark mode (optional)

---

## 🌐 Live Demo

> Coming soon... or host it yourself using Vercel/Netlify.

---

## 🛠️ Tech Stack

| Technology    | Usage                         |
|---------------|-------------------------------|
| **React**     | Front-end framework           |
| **TypeScript**| Type safety                   |
| **Tailwind CSS** | Styling                    |
| **react-rnd** | Draggable/resizable windows   |
| **Zustand**   | Global state management       |
| **Vite**      | Lightning-fast build tool     |

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/windows10-web-simulator.git
cd windows10-web-simulator
```
2. **Install dependencies**
```bash
npm install
```
3. **Start the development server**
```bash
npm run dev
```
4. **Open http://localhost:5173 in your browser.**


## 🖼️ Screenshots
```bash

```
## 📄 License
```bash
This project is licensed under the MIT License
© 2025 Jatin Saini
```

## 🤝 Contributing
```bash
Contributions are welcome Please fork the repo, make changes, and submit a pull request. For major changes, open an issue first to discuss what you like to change.
```
## 💡 Ideas for Future Enhancements
```
🔐 Lock screen / login UI

🎨 Drag-and-drop icons

🧹 Recycle Bin with deletion/restore logic

🌍 Web browser simulation

📁 Persistent file system (via localStorage)

💬 Notification center

🔄 Window snapping/resizing like real Windows

📂 App store with mock installs
```

## 🙏 Acknowledgments
```
BlueEdge – for inspiration from Win11 simulator

Windows 10 for the iconic UI 😉
```