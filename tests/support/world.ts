import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage, EditorPage, ArticlePage } from '../../pages';
import { ArticleData } from '../../types';
import dotenv from 'dotenv';

dotenv.config();

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Page Objects
  loginPage!: LoginPage;
  editorPage!: EditorPage;
  articlePage!: ArticlePage;

  // Test Data
  articleData!: ArticleData;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Initialize page objects
    this.loginPage = new LoginPage(this.page);
    this.editorPage = new EditorPage(this.page);
    this.articlePage = new ArticlePage(this.page);
  }

  async cleanup(): Promise<void> {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
