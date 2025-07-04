import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

interface TreeItem {
  name: string;
  depth: number;
  isFolder: boolean;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('project-structure-creator.createStructure', () => {
    const panel = vscode.window.createWebviewPanel(
      'projectStructureCreator',
      '📁 Project Structure Creator',
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
      }
    );

    panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);

    panel.webview.onDidReceiveMessage(async message => {
      if (message.command === 'createStructure') {
        const folderUri = await vscode.window.showOpenDialog({ canSelectFolders: true });
        if (!folderUri || folderUri.length === 0) return;

        const rootPath = folderUri[0].fsPath;
        const structure = message.structure as TreeItem[];

        const absoluteItems = buildAbsolutePaths(rootPath, structure);

        for (const item of absoluteItems) {
          if (item.isFolder) {
            if (!fs.existsSync(item.path)) {
              fs.mkdirSync(item.path, { recursive: true });
            }
          } else {
            const dir = path.dirname(item.path);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }
            if (!fs.existsSync(item.path)) {
              fs.writeFileSync(item.path, '');
            }
          }
        }

        vscode.window.showInformationMessage('✅ Structure created!');
      }
    });
  });

  context.subscriptions.push(disposable);
}

function buildAbsolutePaths(basePath: string, structure: TreeItem[]): { path: string; isFolder: boolean }[] {
  const result: { path: string; isFolder: boolean }[] = [];
  const stack: string[] = [];

  structure.forEach(item => {
    // Adjust stack to current depth
    stack.length = item.depth;
    stack[item.depth] = item.name;

    const relativePath = path.join(...stack.slice(0, item.depth + 1));
    const fullPath = path.join(basePath, relativePath);

    result.push({
      path: fullPath,
      isFolder: item.isFolder
    });
  });

  return result;
}

function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
  const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'styles.css'));
  const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'main.js'));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Project Structure Creator</title>
  <link href="${styleUri}" rel="stylesheet">
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Project Structure Creator</h1>
      <p>Transform text into organized project structures instantly</p>
    </div>

    <div class="main-content">
      <div class="input-section">
        <div class="section-title">📝 Input Structure</div>
        <div class="textarea-container">
          <textarea id="structureInput" placeholder="Paste your structure here (indented or ASCII tree like ├──)"></textarea>
        </div>
        <div class="controls">
          <button class="btn btn-primary" id="createButton">📁 Create Structure</button>
        </div>
      </div>

      <div class="output-section">
        <div class="section-title">📂 Structure Preview</div>
        <div class="file-tree" id="fileTree"></div>
      </div>
    </div>

    <div class="status-indicator" id="status"></div>

    <footer class="author-footer">
      Developed by <a href="https://github.com/sajikrishna" target="_blank">Saji Krishna</a>
    </footer>

    <script src="${scriptUri}"></script>
  </div>
</body>
</html>`;
}

export function deactivate() {}
