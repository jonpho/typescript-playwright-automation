import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MakeupPage extends BasePage {
  readonly page: Page;
  readonly makeupHomeTitle;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.makeupHomeTitle = page.locator('#maincontainer').getByText('Makeup', { exact: true })
  }
}
