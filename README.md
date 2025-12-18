# Escarpment Coffee Roasters Website

A modern, static website for Escarpment Coffee Roasters, built with React 19, Vite, and Tailwind CSS. This project fetches live product data from iDrinkCoffee.com at build time to generate a high-performance, static experience.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Routing:** [wouter](https://github.com/molefrog/wouter)
- **Language:** TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v9 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/pranavchavda/escarpment-coffee-website.git
    cd escarpment-coffee-website
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Development

Start the development server:

```bash
pnpm dev
```

This command will:
1.  Run `scripts/fetch-data.mjs` to download the latest coffee data from iDrinkCoffee.com.
2.  Start the Vite development server at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
pnpm build
```

This process:
1.  Fetches fresh product data.
2.  Compiles the React application into static assets in the `dist` folder.
3.  Optimizes images and assets for deployment.

## 📦 Data Fetching Architecture

This website uses a **Static Site Generation (SSG)** approach for data.

- **Source:** `https://idrinkcoffee.com/collections/coffee.json`
- **Process:**
    1.  The `scripts/fetch-data.mjs` script runs before every build (via `prebuild` hook).
    2.  It fetches the JSON feed, parses it, and saves it to `client/public/data/coffee.json`.
    3.  The frontend (`client/src/lib/api.ts`) reads from this local static file.
- **Benefit:** The site is 100% static at runtime, ensuring maximum speed and reliability, with no dependency on external APIs during user browsing.

## 🎨 Design System

The design philosophy is **"Rustic Industrial Minimalism"**, reflecting the rugged beauty of the Niagara Escarpment.

- **Colors:** Deep charcoal, burnt sienna, and warm earth tones.
- **Typography:**
    - Headings: `Oswald` (Industrial, bold)
    - Body: `Roboto Mono` (Technical, precise)
- **Components:** Located in `client/src/components/ui`, built with shadcn/ui for accessibility and customizability.

## 📂 Project Structure

```
escarpment-coffee-website/
├── client/
│   ├── public/          # Static assets (images, data)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── lib/         # Utilities (API, tag parsing)
│   │   ├── pages/       # Route components (Home, About, etc.)
│   │   └── index.css    # Global styles & Tailwind config
├── scripts/             # Build scripts (data fetching)
├── server/              # (Optional) Local dev server config
└── package.json         # Project dependencies & scripts
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
