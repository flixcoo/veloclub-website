# Véloclub - Website

This repository contains the React linktree website for the band "Véloclub", built with React and Vite. Its deployed
version can be found at [veloclubband.de](https://veloclubband.de).

## Development

### Requirements

- Node.js
- pnpm

### Setup

**Install dependencies**

```bash
pnpm install
```

**Start development server**

```bash
pnpm run dev
```

Default URL: `http://localhost:5173`

**Create a production build**

```bash
pnpm run build
````

Output directory: `/build`

## Production

### Requirements

- Docker Compose

### Setup

```bash
docker compose up --build
```

Runs on Port `8081`

