import { ArticleData } from '../../types';

export const generateArticleData = (): ArticleData => ({
  title: `Shifting left ${Date.now()}`,
  description: 'How Developers Actually Adopted Karate',
  body: 'Test earlier in SDLC\nShip fast with high confidence\nIn Sprint Automation\nShort feedback loops',
  tags: 'Shift-left',
});
