import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../../pages';

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(
      process.env.USER_EMAIL!,
      process.env.USER_PASSWORD!
    );
    await loginPage.verifySuccessfulLogin();
    await use(page);
  },
});

export { expect } from '@playwright/test';
