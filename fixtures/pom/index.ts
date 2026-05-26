/**
 * Single import point for all Page Object fixtures.
 * Import test and expect from here in every spec file instead of @playwright/test.
 *
 * Example:
 *   import { test, expect } from '../fixtures/pom';
 */
import { test as setup, expect } from '../helper/setup';
import { HomePage } from '../../pages/HomePage';

type PomFixtures = {
  homePage: HomePage;
};

// Extend the base setup fixture with Page Object Model instances
export const test = setup.extend<PomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect };
