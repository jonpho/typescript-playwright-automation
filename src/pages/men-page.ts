import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MenPage extends BasePage {
  readonly page: Page;
  readonly menHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.menHomeTitle = page.locator('#maincontainer').getByText('Men', { exact: true });
  }
}
