# Playwright Project — Claude Code Orchestrator

## Project Overview
End-to-end test automation suite using Playwright + TypeScript.

## Key Directories
| Path | Purpose |
|------|---------|
| `tests/` | Test spec files (`.spec.ts`) |
| `pages/` | Page Object Model classes |
| `fixtures/` | Playwright fixtures (api, helper, pom sub-folders) |
| `helpers/` | Shared utility functions |
| `test-data/` | Static JSON + Faker factories |
| `config/` | App-level configuration |
| `enums/` | Shared constants and enums |
| `env/` | Per-environment `.env` files |
| `scripts/` | Setup / utility scripts |

## Running Tests
```bash
npm test                  # all browsers
npm run test:chrome       # Chrome only
npm run test:firefox      # Firefox only
npm run test:headed       # headed mode (visible browser)
npm run report            # open HTML report
```

## Conventions
- One `describe` block per page/feature per spec file
- Page Objects live in `pages/`, one class per page
- Never hardcode URLs in tests — use `baseURL` from `playwright.config.ts`
- Fixtures extend `@playwright/test` — import from `fixtures/pom/index.ts`
