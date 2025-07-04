# 📁 Project Structure Creator

> A Visual Studio Code extension to generate folder and file structures from text-based input like indented trees or ASCII-style diagrams.

---

## ✨ Features

- 📝 Paste text-based project structures (supports space-indented or ASCII tree formats like `├──`)
- 📂 Live preview of folder structure before creation
- ⚡ One-click structure creation inside a chosen workspace folder
- 💡 Works for frontend, backend, and full-stack projects
- 🙋‍♂️ Created by [Saji Krishna](https://github.com/sajikrishna)

---

## 📸 Screenshot

> _Paste a screenshot image here if needed. For example:_

![Demo Screenshot](https://raw.githubusercontent.com/your-username/your-repo/main/demo.gif)

---

## 🧪 Sample Input

### Type 1: ASCII Tree
```
my-app/
├── public/
│ └── index.html
├── src/
│ ├── App.tsx
│ └── main.tsx
└── README.md
```
### Type 2: Space Indented
```
my-app/
public/
index.html
src/
App.tsx
main.tsx
README.md
```
---

## 🚀 Getting Started

1. Open VS Code
2. Press `Ctrl+Shift+P` → search **"Create Project Structure from Text"**
3. Paste your structure
4. Click **"📁 Create Structure"**
5. Choose a folder → done ✅

---

## 🛠️ Tech Stack

- [VS Code Extensions API](https://code.visualstudio.com/api)
- TypeScript
- HTML/CSS/JS (Webview)
- Node.js `fs` & `path` modules

---

## 📦 Extension Packaging

```bash
npm install -g @vscode/vsce
vsce package


---
