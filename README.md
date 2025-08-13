# Fedimint Federation Setup Guide

A React + Vite + TypeScript web app that guides users through launching a Fedimint federation via self-hosted or cloud-hosted paths.

## Features
- Guided flows for Self-Hosted and Cloud-Hosted setups
- Platform-specific instructions (Start9, Umbrel, Docker, NixOS)
- Modern UI with Tailwind CSS and lucide-react icons

## Tech Stack
- Vite 5, React 18, TypeScript
- React Router
- Tailwind CSS (+ tailwindcss-animate)

## Prerequisites
- Node.js 18+
- pnpm

## Getting Started
```bash
pnpm install
pnpm dev
```
App runs with Vite’s dev server. Use the printed local URL.

## Scripts
- dev: start dev server
- build: production build
- preview: preview built app
- lint: run ESLint

```bash
pnpm build
pnpm preview
pnpm lint
```

## Project Structure
```
assets/                      static assets (logos)
public/                      favicon and static files
src/
  components/               shared UI components
  pages/                    route pages
    instructions/           platform-specific guides
  App.tsx                   routes
  main.tsx                  entry
  index.css                 styles (Tailwind)
index.html                  HTML template
vite.config.ts              Vite config
tailwind.config.js          Tailwind config
eslint.config.js            ESLint config
```

## Routes
- /                        Landing
- /setup-type              Choose Self-Hosted or Cloud-Hosted
- /self-hosted             Self-hosted platforms
- /cloud-hosted            Cloud providers
- /instructions/start9     Start9 guide
- /instructions/umbrel     Umbrel guide
- /instructions/docker     Docker guide
- /instructions/nix        NixOS guide

## Development Notes
- Uses pnpm-lock.yaml; prefer pnpm for consistency
- Static site output from Vite build can be deployed to any static host
