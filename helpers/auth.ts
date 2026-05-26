/**
 * Authentication helper — handles login/logout utilities
 * shared across test suites.
 */
import { type Page } from '@playwright/test';

// Update selectors below to match the target application's login page
export async function login(page: Page, username: string, password: string) {
  await page.fill('[name="username"]', username);
  await page.fill('[name="password"]', password);
  await page.click('[type="submit"]');
}

export async function logout(page: Page) {
  await page.click('[data-testid="logout"]');
}
