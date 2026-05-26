import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './config/urls';

export default defineConfig({
  // Directory where test files are located
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests once on CI
  retries: process.env.CI ? 2 : 0,

  // Reporter to use
  reporter: 'html',

  // Per-test timeout — raised to 60 s because the public blogspot site can be slow
  timeout: 60_000,

  // Shared settings for all tests
  use: {
    baseURL: BASE_URL,

    // Navigation timeout matches the overall test timeout
    navigationTimeout: 60_000,

    // Collect trace on retry only
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Viewport size
    viewport: { width: 1280, height: 720 },
  },

  // Configure test projects for Chrome and Firefox
  projects: [
    {
      // Named 'chrome' to match the actual browser launched via channel
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
  ],
});
