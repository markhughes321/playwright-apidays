import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { generateArticleData } from '../data';

Given('the user is logged into the {string} application', async function (this: CustomWorld, appName: string) {
  await this.loginPage.navigateToLogin();
  await this.loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );
  await this.loginPage.verifySuccessfulLogin();
});

Given('they create a new article', async function (this: CustomWorld) {
  this.articleData = generateArticleData();
  await this.editorPage.navigateToEditor();
  await this.editorPage.createArticle(this.articleData);
});

When('the user is on the new article page', async function (this: CustomWorld) {
  await this.articlePage.verifyArticlePage(this.articleData.title);
});

Then('they can delete the article successfully', async function (this: CustomWorld) {
  await this.articlePage.deleteArticle();
  await this.articlePage.verifyArticleDeleted();
});
