import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class SkincarePage extends BasePage {
  readonly page: Page;
  readonly skincareHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.skincareHomeTitle = page.locator('#maincontainer').getByText('Skincare');
  }
}
