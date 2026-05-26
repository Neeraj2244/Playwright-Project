const ENV_URLS: Record<string, string> = {
  local:      'https://testautomationpractice.blogspot.com',
  staging:    'https://testautomationpractice.blogspot.com',
  production: 'https://testautomationpractice.blogspot.com',
};

export const BASE_URL = ENV_URLS[process.env.TEST_ENV ?? 'local'];
