# Mycelium
This is my learning journey into Rust, disguised as a code editor. I'm building Mycelium to explore Rust, Tauri, and code visualization. The goal is a lightweight editor with a retro ASCII theme and a graph view to untangle codebases.

---

# Mycelium: A Comprehensive Roadmap

### Project Description

The name **Mycelium** is inspired by the vast, interconnected fungal networks that grow beneath the forest floor. It perfectly represents the project's core mission: to reveal and navigate the hidden, intricate relationships within a software codebase.

Mycelium is a next-generation, open-source code editor that combines the raw performance of a Rust core with the styling flexibility of a web-based frontend. Its primary features are an interactive graph view for visualizing code architecture and a unique, retro-inspired "ASCII" aesthetic, all delivered in a lightweight, cross-platform desktop application via Tauri.

---

### Phase 1: Project Scaffolding & The "Hello, World" Bridge

**Goal:** Prove that the core architecture works and establish the initial Mycelium codebase on GitHub.

*   **1.1. Project Initialization:**
    *   Inside your cloned repo, run `create-tauri-app` to generate the project structure.
*   **1.2. Git: The Initial Commit:**
    *   Stage and commit the initial files: `git commit -m "Initial commit of Mycelium project structure"`
*   **1.3. Rust/TS Bridge & Aesthetic Pass:**
    *   Implement a simple Tauri command to prove the Rust-to-TypeScript communication.
    *   Apply the global monospace font and retro color scheme in your CSS.
*   **1.4. Git: Push the Foundation:**
    *   Commit the working prototype: `git commit -m "feat: Implement initial Rust-TS bridge and basic styling"`
    *   Push your `main` branch to GitHub.

**✅ Milestone:** The Mycelium project is live on GitHub. Anyone can clone it and see the foundational Rust-TS bridge and visual theme.

---

### Phase 2: The Core Editor - "A Better Notepad"

**Goal:** Implement file system features using a proper feature-branch workflow.

**✅ Milestone:** Mycelium is now a functional, two-pane text editor. You have successfully completed a full development cycle using a professional Git workflow.

---

### Phase 3: The "Intelligence" - Language Server Integration

**Goal:** Transform Mycelium into a true IDE by adding code intelligence via LSP.

**✅ Milestone:** Mycelium now provides modern IDE features like real-time feedback, syntax highlighting, and error checking for at least one language.

---

### Phase 4: The Signature Feature: The Mycelium Graph View

**Goal:** Implement the interactive graph view that fully embodies the "Mycelium" name.

**✅ Milestone:** The Mycelium Graph View is implemented. The application's unique selling proposition is now a reality and truly lives up to the project's name.

---

### Phase 5: Polish, Automation & Open-Source Readiness

**Goal:** Turn Mycelium into a polished, distributable application ready for a community.

**✅ Milestone:** Mycelium is a polished, well-documented, open-source application with professional CI/CD automation, ready for users and contributors.
