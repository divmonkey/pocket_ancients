# Pocket Ancients Engineering Rules

## 1. Core Mandates
- **Licensing:** Use ONLY MIT, Apache 2.0, or BSD licensed packages. NO GPL/AGPL.
- **Security:** Use parameterized queries for ALL database interactions (`$1`, `$2`). NEVER use template strings for SQL.
- **Architecture:** Follow Clean Architecture. Routes handle HTTP, Services handle logic, Models handle Data Access.

## 2. Token Efficiency
- **No Filler:** Omit conversational preambles and postambles.
- **Surgical Edits:** Use `replace` for targeted changes instead of overwriting large files.
- **Batching:** Combine directory creation and installations into single shell commands where possible.

## 3. Tech Stack Conventions
- **Server:** Fastify (ESM), PostgreSQL (@fastify/postgres), Redis (@fastify/redis).
- **Client:** Vite, Vue 3 (Script Setup), Tailwind v4, Phaser 4, Pinia.
- **URLs:** Use `vue-router` with `createWebHistory` for clean pathing.

## 4. Environment Management
- Keep secrets in `.env` (gitignored).
- Maintain `.env.example` with placeholders for all required variables.
