import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class FragrancePage extends BasePage {
  readonly page: Page;
  readonly fragranceHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.fragranceHomeTitle = page.locator('#maincontainer').getByText('Fragrance', { exact: true });
  }
}
