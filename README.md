# Hello World React Boilerplate


This is a minimal React + TypeScript + Vite project, with SCSS and Tailwind CSS support.


## Features
- React 19 + TypeScript
- Vite for fast development
- SCSS support (see `src/index.scss`)
- Tailwind CSS utility classes available
- Minimal styling (centered Hello World)


## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Styling

- You can use both SCSS and Tailwind utility classes in your components.
- Global styles are in `src/index.scss`.
- Tailwind is configured via `tailwind.config.js` and loaded in `index.scss`.

Example usage in a component:

```tsx
<div className="bg-gray-900 text-white p-4 rounded shadow">
  Hello Tailwind!
</div>
```

Or add custom SCSS in `index.scss` or import your own SCSS files.

## Project Structure

- `src/App.tsx` — Main React component (Hello World)
- `src/index.scss` — Minimal global styles
- `vite.config.ts` — Vite configuration

## Build for Production

```
npm run build
```

## License

MIT
