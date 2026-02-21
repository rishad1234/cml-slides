# Compute Paradigms - Slides

A Reveal.js presentation covering AWS compute paradigms: EC2, Lambda, and Fargate.

## Topics Covered

- EC2 (Servers) vs Lambda (Serverless) vs Fargate (Containers)
- Stateless vs Stateful architectures
- When to use each approach
- Cold starts and scaling patterns
- Why "it works on my machine" isn't enough

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Setup

```bash
# Install dependencies
npm install
```

## Running Locally

```bash
# Start development server with hot reload
npm run dev
```

The browser will open automatically at `http://localhost:5173/`

## Navigation

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `S` | Speaker notes |
| `F` | Fullscreen |
| `Esc` or `O` | Slide overview |

## Export to PDF

1. Open `http://localhost:5173/?print-pdf`
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Set destination to "Save as PDF"
4. Save

## Build for Production

```bash
npm run build
```

This generates a **single self-contained HTML file** at `dist/compute-paradigms.html` (~4MB) with all CSS, JS, and Reveal.js bundled inline.

Share this one file — no server, no dependencies, just open it in any browser.

## Project Structure

```
compute-paradigms/
├── index.html           # Slides content
├── main.js              # Reveal.js initialization
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies & scripts
├── scripts/
│   └── inline-build.js  # Bundles everything into one HTML
└── README.md            # This file
```

## License

© 2026 rishad1234 | [github.com/rishad1234/cml-slides](https://github.com/rishad1234/cml-slides)
