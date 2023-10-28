import { test, expect } from '@playwright/test';
import { BasePage } from '../src/pages/base-page';
import { ApparelAccessoriesPage } from '../src/pages/apparel-accessories-page';
import { BooksPage } from '../src/pages/books-page';
import { HairCarePage } from '../src/pages/hair-care-page';
import { MenPage } from '../src/pages/men-page';
import { FragrancePage } from '../src/pages/fragrance-page';
import { SkincarePage } from '../src/pages/skincare-page';
import { MakeupPage } from '../src/pages/makeup-page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log("Navigate to Automation Site");
  const basePage = new BasePage(page);
  await basePage.navigateToSite();
});

test('Test HomePage Header Present', async ({ page }) => {
  const basePage = new BasePage(page);
  await expect(basePage.homeHeadingLink).toHaveText('Home');
});

test('Test Navigation Heading Links and Page Titles', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.apparelAccessoriesheadingLink.click();
  const apparelAccessoriesPage = new ApparelAccessoriesPage(page);
  await expect(apparelAccessoriesPage.apparelAccessoriesHomeTitle).toHaveText('Apparel & accessories');
  await basePage.makeupHeadingLink.click();
  const makeupPage = new MakeupPage(page);
  await expect(makeupPage.makeupHomeTitle).toHaveText('Makeup');
  await basePage.skincareHeadingLink.click();
  const skincarePage = new SkincarePage(page);
  await expect(skincarePage.skincareHomeTitle).toHaveText('Skincare');
  await basePage.fragranceHeadingLink.click();
  const fragrancePage = new FragrancePage(page);
  await expect(fragrancePage.fragranceHomeTitle).toHaveText('Fragrance');
  await basePage.menHeadingLink.click();
  const menPage = new MenPage(page);
  await expect(menPage.menHomeTitle).toHaveText('Men');
  await basePage.hairCareHeadingLink.click();
  const hairCarePage = new HairCarePage(page);
  await expect(hairCarePage.hairCareHomeTitle).toHaveText('Hair Care');
  await basePage.booksHeadingLink.click();
  const booksPage = new BooksPage(page);
  await expect(booksPage.booksHomeTitle).toHaveText('Books');
});
