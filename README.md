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

### ✅ `LICENSE` (MIT)

```markdown
MIT License

Copyright (c) 2025 Saji Krishna R S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      
copies of the Software, and to permit persons to whom the Software is          
furnished to do so, subject to the following conditions:                       

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.                                

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
