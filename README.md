# hivemart-api

HiveMart product API — a sample **component** for CloudBees Unify Release Orchestration.

- `src/server.js` — tiny dependency-free HTTP API (`/healthz`, `/api/products`).
- `.cloudbees/workflows/build.yaml` — CI: test, build image, register build artifact.
- `.cloudbees/workflows/deploy.yaml` — called by the application deployer with
  `artifact-id` and `environment` inputs (simulated deploy).

Run locally: `node src/server.js` · Test: `node --test`
