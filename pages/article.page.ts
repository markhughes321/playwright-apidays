import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ArticlePage extends BasePage {
  private readonly deleteButton: Locator;
  private readonly articleTitle: Locator;
  private readonly articleBody: Locator;

  constructor(page: Page) {
    super(page);
    this.deleteButton = page.locator('button:has-text("Delete Article")').first();
    this.articleTitle = page.locator('h1');
    this.articleBody = page.locator('.article-content p');
  }

  async verifyArticlePage(expectedTitle: string): Promise<void> {
    await expect(this.articleTitle).toContainText(expectedTitle, { timeout: 10000 });
  }

  async verifyArticleContent(): Promise<void> {
    await expect(this.articleBody).toBeVisible();
  }

  async deleteArticle(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.deleteButton.click();
  }

  async verifyArticleDeleted(): Promise<void> {
    await expect(this.page).toHaveURL(/#\/$/, { timeout: 10000 });
  }
}
