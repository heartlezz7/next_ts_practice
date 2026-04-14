# next_ts_practice

A practice project built with Next.js 16 and TypeScript, configured with Docker support for production deployments.

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript 5** (strict mode)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Docker Compose (recommended)

Spins up the Next.js app behind an nginx reverse proxy:

```bash
docker compose up -d --build
```

Open [http://localhost](http://localhost) — nginx listens on port 80 and proxies to the app.

```bash
docker compose down        # stop and remove containers
docker compose logs -f     # stream logs
```

### Docker (standalone)

```bash
docker build -t next-practice .
docker run -d -p 3000:3000 --name hadevz_web next-practice
```

The Dockerfile uses a multi-stage build with `node:20-alpine` and runs as a non-root user for security. The `output: "standalone"` config in `next.config.ts` minimizes the final image size.

> **Note:** Remove `output: "standalone"` from `next.config.ts` if deploying to Vercel or Netlify.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
app/
  layout.tsx        # Root layout & metadata
  page.tsx          # Home page (/)
  globals.css       # Global CSS reset
nginx/
  nginx.conf        # Reverse proxy config
docker-compose.yml  # Orchestrates web + nginx
Dockerfile
next.config.ts
tsconfig.json
```

## Path Aliases

`@/*` resolves to the project root, configured in `tsconfig.json`.
