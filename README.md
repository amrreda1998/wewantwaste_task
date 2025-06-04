# We Want Waste – Skip Hire App

A modern React + TypeScript + Vite application for selecting and hiring skips, styled with Tailwind CSS and DaisyUI.

## Features

- **Skip Size Selection**  
  Browse a range of skip sizes with images, prices, and details.
- **Sorting & Filtering**  
  - Sort skips by size or price, ascending or descending.
  - Filter skips to show only those allowed on the road.
- **Skip Details Modal**  
  View more information about each skip in a modal popup.
- **Selection Highlighting**  
  Visually select a skip; the selection is highlighted.
- **Responsive Design**  
  Fully responsive layout for mobile, tablet, and desktop.
- **Stepper Navigation**  
  Visual stepper at the top showing progress through the booking process.
- **Progress Bar**  
  Progress bar and step indicator for user guidance.
- **Loading Skeletons**  
  Animated skeleton cards while data is loading.
- **Accessible UI**  
  Semantic HTML, ARIA attributes, and keyboard navigation support.
- **Modern Tooling**  
  - Vite for fast development and builds.
  - ESLint for code quality.
  - TypeScript for type safety.
  - Tailwind CSS and DaisyUI for styling.
  - Lucide React icons for UI elements.

## Project Structure

```
wewantwaste_task/
├── public/
│   └── logo.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── assets/
│   │   └── skip_images/
│   │       ├── 4-yarder-skip.jpg
│   │       ├── 6-yarder-skip.jpg
│   │       └── ...etc
│   ├── components/
│   │   └── Layout.tsx
│   ├── data/
│   │   └── skip_data.ts
│   └── pages/
│       └── SkipSizePage.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
# or
yarn install
```

### Development

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Customization

- **Skip Data:**  
  Modify [`src/data/skip_data.ts`](src/data/skip_data.ts) to change available skips.
- **Images:**  
  Add or replace skip images in [`src/assets/skip_images/`](src/assets/skip_images/).
- **Styling:**  
  Tailwind CSS and DaisyUI can be customized in [`src/index.css`](src/index.css).

## File Overview

- [`src/App.tsx`](src/App.tsx): Main app entry, wraps content in [`Layout`](src/components/Layout.tsx).
- [`src/components/Layout.tsx`](src/components/Layout.tsx): Stepper, progress bar, and layout.
- [`src/pages/SkipSizePage.tsx`](src/pages/SkipSizePage.tsx): Skip selection UI, sorting/filtering, modal, and skeletons.
- [`src/data/skip_data.ts`](src/data/skip_data.ts): Skip data source.
- [`src/main.tsx`](src/main.tsx): React root rendering.
- [`src/index.css`](src/index.css): Tailwind and DaisyUI imports.

## License

This project is for demonstration and interview purposes.

---

**Made with React, TypeScript, Vite, Tailwind CSS, DaisyUI, and Lucide React.**