import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object Model for https://testautomationpractice.blogspot.com/
 * Encapsulates locators and actions for the home page form elements.
 */
export class HomePage {
  readonly page: Page;

  // Form field locators — ids confirmed from live DOM inspection
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;
  readonly addressField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameField    = page.locator('#name');
    this.emailField   = page.locator('#email');
    this.phoneField   = page.locator('#phone');
    // Address uses a <textarea>, id="textarea"
    this.addressField = page.locator('#textarea');
  }

  async goto() {
    // Uses baseURL from playwright.config.ts — no hardcoded URL here
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async fillName(value: string) {
    await this.nameField.clear();
    await this.nameField.fill(value);
  }

  async fillEmail(value: string) {
    await this.emailField.clear();
    await this.emailField.fill(value);
  }

  async fillPhone(value: string) {
    await this.phoneField.clear();
    await this.phoneField.fill(value);
  }

  async fillAddress(value: string) {
    await this.addressField.clear();
    await this.addressField.fill(value);
  }
}
