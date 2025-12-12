import { test } from '../fixtures';
import { generateArticleData } from '../data';
import { EditorPage, ArticlePage } from '../../pages';

test.describe('Article Management', () => {
  test('Article Management: Create, Verify and Delete an article', async ({ authenticatedPage }) => {
    const editorPage = new EditorPage(authenticatedPage);
    const articlePage = new ArticlePage(authenticatedPage);
    const articleData = generateArticleData();

    await test.step('Navigate to editor', async () => {
      await editorPage.navigateToEditor();
    });

    await test.step('Create new article', async () => {
      await editorPage.createArticle(articleData);
    });

    await test.step('Verify article was created', async () => {
      await articlePage.verifyArticlePage(articleData.title);
    });

    await test.step('Delete article', async () => {
      await articlePage.deleteArticle();
    });

    await test.step('Verify article was deleted', async () => {
      await articlePage.verifyArticleDeleted();
    });
  });
});
