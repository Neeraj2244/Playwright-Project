/**
 * Test Suite: Contact Form — Email, Phone, Address fields
 * Verifies that each field accepts and retains dummy input data.
 */
import { test, expect } from '../fixtures/pom';
import { FORM_DATA }    from '../test-data/form-data';

test.describe('Contact Form Fields', () => {

  test('should fill Email field with dummy data', async ({ homePage }) => {
    // Navigate to the page using the POM (baseURL resolved from playwright.config.ts)
    await homePage.goto();

    await expect(homePage.emailField).toBeVisible();
    await homePage.fillEmail(FORM_DATA.email);

    await expect(homePage.emailField).toHaveValue(FORM_DATA.email);
  });

  test('should fill Phone field with dummy data', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.phoneField).toBeVisible();
    await homePage.fillPhone(FORM_DATA.phone);

    await expect(homePage.phoneField).toHaveValue(FORM_DATA.phone);
  });

  test('should fill Address field with dummy data', async ({ homePage }) => {
    // Address uses a <textarea> — same fill/assert API applies
    await homePage.goto();

    await expect(homePage.addressField).toBeVisible();
    await homePage.fillAddress(FORM_DATA.address);

    await expect(homePage.addressField).toHaveValue(FORM_DATA.address);
  });

  test('should fill all three fields together', async ({ homePage }) => {
    await homePage.goto();

    // Fill every field in one test to verify no field interferes with another
    await homePage.fillEmail(FORM_DATA.email);
    await homePage.fillPhone(FORM_DATA.phone);
    await homePage.fillAddress(FORM_DATA.address);

    await expect(homePage.emailField).toHaveValue(FORM_DATA.email);
    await expect(homePage.phoneField).toHaveValue(FORM_DATA.phone);
    await expect(homePage.addressField).toHaveValue(FORM_DATA.address);
  });

});
