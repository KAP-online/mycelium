import { invoke } from "@tauri-apps/api/core";

const fileTreeEl = document.querySelector<HTMLDivElement>("#file-tree");
const fileContentEl = document.querySelector<HTMLTextAreaElement>("#file-content");

let currentFilePath: string | null = null;

async function loadFile(path: string) {
  if (!fileContentEl) return;

  try {
    const contents = await invoke<string>("read_file", { path });
    fileContentEl.value = contents;
    currentFilePath = path;
  } catch (error) {
    console.error(`Failed to read file: ${path}`, error);
    fileContentEl.value = `Error: Could not load file.`;
    currentFilePath = null;
  }
}

async function populateFileTree() {
  if (!fileTreeEl) return;

  try {
    const entries = await invoke<string[]>("list_dir", { path: "../workspace" });

    fileTreeEl.innerHTML = '';

    for (const path of entries) {
      const fileEntry = document.createElement("div");
      fileEntry.className = "file-entry";
      fileEntry.textContent = path.split(/[\\/]/).pop() || path;
      fileEntry.dataset.path = path;
      fileTreeEl.appendChild(fileEntry);
    }
  } catch (error) {
    console.error("Failed to list directory:", error);
    fileTreeEl.textContent = "Error loading files.";
  }
}

async function setup() {
  if (!fileTreeEl || !fileContentEl) {
    console.error("Could not find required UI elements. Aborting setup.");
    return;
  }

  await populateFileTree();

  fileTreeEl.addEventListener("click", (e) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("file-entry")) {
      const path = target.dataset.path;
      if (path) {
        loadFile(path);
      }
    }
  });

  fileContentEl.addEventListener("keydown", async (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      if (currentFilePath) {
        try {
          await invoke("write_file", {
            path: currentFilePath,
            contents: fileContentEl.value,
          });
          console.log(`File saved: ${currentFilePath}`);
        } catch (error) {
          console.error(`Failed to save file: ${currentFilePath}`, error);
        }
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setup();
});