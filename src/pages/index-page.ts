import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class IndexPage extends BasePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly homeLink: Locator;
  readonly apparelAccessoriesLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.pageTitle = page.getByRole('link', { name: 'Automation Test Store' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.apparelAccessoriesLink = page.getByRole('link', { name: 'Apparel & accessories' });
  }
}
