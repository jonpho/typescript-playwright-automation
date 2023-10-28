import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ApparelAccessoriesPage extends BasePage {
  readonly page: Page;
  readonly apparelAccessoriesHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.apparelAccessoriesHomeTitle = page.locator('#maincontainer').getByText('Apparel & accessories')
  }
}
