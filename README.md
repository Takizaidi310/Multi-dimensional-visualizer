# HyperSpace: N-Dimensional Topology Simulator

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Tech](https://img.shields.io/badge/Tech-Three.js%20%7C%20WebGL-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

HyperSpace is a high-performance browser-based visualization engine designed to render "Measure Polytopes" (Hypercubes) across 3, 4, 5, and 6 spatial dimensions. It acts as a mathematical bridge, translating theoretical higher-dimensional coordinates into a visual format humans can comprehend through advanced recursive projection.

---

## 🚀 Core Features

* **Multidimensional Rendering**: Dynamically visualize structures from 3D up to 6D (Hexeracts).
* **Hyper-Rotation**: View objects "folding" through complex planes such as ZW, XW, and VU.
* **Cyberpunk UI**: A modern interface featuring CSS3 Glassmorphism and frosted-glass control panels.
* **Real-Time Analysis**: Adjust perspective depth, rotation speed, and visual modes (Wireframe/Solid) on the fly.
* **High-Fidelity Visuals**: Powered by UnrealBloomPass for a signature neon glow effect.

---

## 🛠 Technology Stack

### Graphics & Engine
* **Three.js (r160)**: Serves as the primary interface for **WebGL**, enabling GPU-accelerated rendering for smooth frame rates.
* **Vanilla JavaScript (ES6+)**: Utilizes a modular architecture with classes and ES modules to separate mathematical logic from rendering.

### Mathematical Protocols
* **Bitwise Vertex Generation**: Employs binary bit-shifting to calculate coordinates for $2^N$ vertices ($+1$ or $-1$) efficiently.
* **Recursive Perspective Projection**: Uses the formula $x' = x / (distance - w)$ to project points down one dimension at a time until reaching 3D space.
* **Trigonometric Rotation Matrices**: Handles rotation across non-traditional planes to create the "inside-out" folding illusion.



### UI & UX
* **HTML5/CSS3**: Core structure and styling using CSS variables for theming.
* **Post-Processing**: Uses the **EffectComposer** to detect bright pixels and apply a blur-additive glow.

---

## 📖 How to Use

1.  **Open the link**: 
2.  **Navigate**: Use your mouse to rotate the 3D viewport and the scroll wheel to zoom.
3.  **Configure**: Use the UI panel to switch dimensions (4D, 5D, etc.) or toggle between Wireframe and Solid modes.
4.  **Capture**: Use the "Capture Analysis" button to export a high-resolution PNG of the current structure.

---

**Engineered by Taki Zaidi**
