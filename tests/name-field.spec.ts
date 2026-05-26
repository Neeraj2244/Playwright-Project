/**
 * Test Suite: Test Automation Practice - Name Field
 * Verifies that the Name input field accepts text input correctly.
 */
import { test, expect } from '../fixtures/pom';

test.describe('Name Field Input', () => {
  test('should type "Random " into the Name field', async ({ homePage }) => {
    // Navigate via HomePage POM — resolves against baseURL in playwright.config.ts
    await homePage.goto();

    // Verify the Name field is visible before interacting
    await expect(homePage.nameField).toBeVisible();

    // Fill the Name field using the POM action
    await homePage.fillName('Random ');

    // Assert the field contains the expected value
    await expect(homePage.nameField).toHaveValue('Random ');
  });
});
