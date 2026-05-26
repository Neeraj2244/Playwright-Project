/**
 * Base fixture layer — adds shared teardown hooks for every test.
 * All other fixture files should extend this instead of @playwright/test directly.
 */
import { test as base, expect } from '@playwright/test';

export const test = base.extend<object>({
  page: async ({ page }, use) => {
    await use(page);
    // Clear cookies after each test to prevent state leakage between tests
    await page.context().clearCookies();
  },
});

export { expect };
