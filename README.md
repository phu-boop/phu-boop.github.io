# phu-boop.github.io

> Personal Portfolio of **Nguyễn Lê Anh Phú** &mdash; Backend Software Engineer.  
> Live at: [https://phu-boop.github.io](https://phu-boop.github.io)

---

## 🛠️ Architecture & Engineering Design

This portfolio represents an **Architectural Engineering Terminal**, built strictly according to the Design System Specification in [`.agents/skills/portfolio-ui/SKILL.md`](.agents/skills/portfolio-ui/SKILL.md).

- **Visual Identity:** Dark charcoal canvas (`#080A0C`), high-contrast electric cyan signals (`#00E5FF`), subtle purple architecture highlights (`#7928CA`), and monospace metadata.
- **Asymmetric Grid Layouts:** 
  - Layout A: 58% / 42% Hero Architecture Split
  - Layout B: 33% / 67% Section Editorial Split
  - Layout C: 50% / 50% Production Feature Project Split
- **Functional Backend Visuals:** Real SVG data stream sequences and architecture topologies based directly on real project specifications (VoltNexus EV Microservices, Personal Expense Management 1M-row export worker pipeline).
- **Zero Heavy Dependencies:** Built with pure semantic HTML5, Vanilla CSS Design Tokens, and lightweight JavaScript for 100% Core Web Vitals and instant loading on GitHub Pages.

---

## 📂 Project Structure

```
phu-boop.github.io/
├── index.html                   # Semantic HTML5 single-page application
├── assets/
│   ├── css/
│   │   ├── tokens.css           # CSS design tokens (:root)
│   │   ├── base.css             # Reset, typography, background grid layers
│   │   ├── layout.css           # 12-column asymmetric grid architectures
│   │   ├── components.css       # Buttons, cards, tags, timeline, metrics, terminal
│   │   └── diagrams.css         # SVG nodes, animated pulse paths, tooltips
│   └── js/
│       ├── main.js              # Nav toggle, scroll spy, metric counters, copy actions
│       └── diagrams.js          # Interactive SVG node inspection
├── PORTFOLIO_CONTEXT.md         # Master engineering profile & project benchmarks
└── .agents/skills/portfolio-ui/ # Antigravity Design System & Engineering Rules
```

---

## 🚀 Local Development

To run and preview the site locally:

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js / npx
npx serve .
```

Open `http://localhost:8080` in your browser.
