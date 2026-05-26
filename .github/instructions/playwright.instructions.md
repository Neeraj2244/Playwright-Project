---
applyTo: "tests/**/*.spec.ts"
---

# GitHub Copilot — Playwright Test Instructions

- Always import `test` and `expect` from `@playwright/test` (or from `fixtures/pom/index.ts`)
- Use Page Object Models from `pages/` for all locator definitions
- Prefer `page.locator()` over deprecated `page.$` selectors
- Use `await expect(locator).toBeVisible()` before interacting with elements
- Group related tests inside a `test.describe()` block
- Never hardcode base URLs — use `baseURL` from `playwright.config.ts`
