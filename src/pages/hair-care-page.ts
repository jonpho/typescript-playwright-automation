import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HairCarePage extends BasePage {
  readonly page: Page;
  readonly hairCareHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.hairCareHomeTitle = page.locator('#maincontainer').getByText('Hair Care');
  }
}
