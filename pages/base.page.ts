import { Page } from '@playwright/test';

export class BasePage {
  protected readonly baseUrl: string;

  constructor(protected page: Page) {
    this.baseUrl = process.env.BASE_URL || 'https://conduit-realworld-example-app.fly.dev';
  }

  async navigateTo(path: string): Promise<void> {
    const url = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
    await this.page.goto(url);
  }
}
