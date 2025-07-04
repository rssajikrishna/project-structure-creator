(function () {
  const vscode = acquireVsCodeApi();

  const structureInput = document.getElementById('structureInput');
  const createButton = document.getElementById('createButton');
  const fileTree = document.getElementById('fileTree');

  function parseStructure(input) {
    const lines = input.split('\n').filter(line => line.trim());
    const structure = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      let name = '';
      let depth = 0;

      if (/[├└│─]/.test(line)) {
        name = line.replace(/^[\s│├└─]+/, '').trim();
        depth = (line.match(/[│├└]/g) || []).length;
      } else {
        const trimmed = line.trim();
        const leadingSpaces = line.length - trimmed.length;
        depth = Math.floor(leadingSpaces / 2);
        name = trimmed;
      }

      let isFolder = false;
      if (name.endsWith('/')) {
        name = name.slice(0, -1);
        isFolder = true;
      } else if (i < lines.length - 1) {
        const nextLine = lines[i + 1];
        let nextDepth = 0;

        if (/[├└│─]/.test(nextLine)) {
          nextDepth = (nextLine.match(/[│├└]/g) || []).length;
        } else {
          nextDepth = Math.floor((nextLine.length - nextLine.trimStart().length) / 2);
        }

        isFolder = nextDepth > depth;
      }

      structure.push({ name, depth, isFolder });
    }

    return structure;
  }

  function renderFileTree(structure) {
    fileTree.innerHTML = '';
    structure.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('tree-item');
      div.classList.add(item.isFolder ? 'tree-folder' : 'tree-file');
      div.style.paddingLeft = `${item.depth * 20}px`;
      div.textContent = item.name;
      fileTree.appendChild(div);
    });
  }

  createButton.addEventListener('click', () => {
    const inputText = structureInput.value;
    if (!inputText.trim()) return;

    const parsed = parseStructure(inputText);

    vscode.postMessage({
      command: 'createStructure',
      structure: parsed
    });

    renderFileTree(parsed);
  });
})();
