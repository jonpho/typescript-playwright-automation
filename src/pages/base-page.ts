import { expect, type Locator, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns';

export class BasePage {
  readonly page: Page;
  readonly homeHeadingLink: Locator;
  readonly apparelAccessoriesheadingLink: Locator;
  readonly makeupHeadingLink: Locator;
  readonly skincareHeadingLink: Locator;
  readonly fragranceHeadingLink: Locator;
  readonly menHeadingLink: Locator;
  readonly hairCareHeadingLink: Locator;
  readonly booksHeadingLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeHeadingLink = page.getByRole('link', { name: 'Home' });
    this.apparelAccessoriesheadingLink = page.getByRole('link', { name: 'Apparel & accessories' });
    this.makeupHeadingLink = page.getByRole('link', { name: 'Makeup' });
    this.skincareHeadingLink = page.getByRole('link', { name: 'Skincare' });
    this.fragranceHeadingLink = page.getByRole('link', { name: 'Fragrance' });
    this.menHeadingLink = page.locator('#categorymenu').getByRole('link', { name: 'Men' })
    this.hairCareHeadingLink = page.getByRole('link', { name: 'Hair Care' });
    this.booksHeadingLink = page.getByRole('link', { name: 'Books' });
  }

  async navigateToSite() {
    await this.page.goto('https://automationteststore.com/');
  }
}
