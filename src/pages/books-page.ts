import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class BooksPage extends BasePage {
  readonly page: Page;
  readonly booksHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.booksHomeTitle = page.locator('#maincontainer').getByText('Books', { exact: true });
  }
}
