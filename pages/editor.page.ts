import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { ArticleData } from '../types';

export class EditorPage extends BasePage {
  private readonly titleInput: Locator;
  private readonly descriptionInput: Locator;
  private readonly bodyTextarea: Locator;
  private readonly tagsInput: Locator;
  private readonly publishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.titleInput = page.locator('input[name="title"]');
    this.descriptionInput = page.locator('input[name="description"]');
    this.bodyTextarea = page.locator('textarea[name="body"]');
    this.tagsInput = page.locator('input[name="tags"]');
    this.publishButton = page.locator('button:has-text("Publish Article")');
  }

  async navigateToEditor(): Promise<void> {
    await this.navigateTo('/#/editor');
    await this.titleInput.waitFor();
  }

  async createArticle(article: ArticleData): Promise<void> {
    await this.titleInput.fill(article.title);
    await this.descriptionInput.fill(article.description);
    await this.bodyTextarea.fill(article.body);

    if (article.tags) {
      await this.tagsInput.fill(article.tags);
      await this.tagsInput.press('Enter');
    }

    await this.publishButton.click();
  }

  async verifyEditorPage(): Promise<void> {
    await expect(this.titleInput).toBeVisible();
    await expect(this.publishButton).toBeVisible();
  }
}
