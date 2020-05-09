import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have an Open button on the home page, the button should open a modal with an OK option (returning TRUE)', async () => {
    page.navigateTo();

    const button = await page.getButton();
    expect(button.getText()).toBe('Open');
    await button.click();

    const modal = await page.getConfirmationModal();
    expect(await modal.isEnabled()).toBeTruthy();

    const acceptBtn = await page.getAcceptButton();

    expect(await acceptBtn.isDisplayed()).toBeTruthy();
    expect(await acceptBtn.isEnabled()).toBeTruthy();
    expect(await acceptBtn.getText()).toBe('OK');
    await acceptBtn.click();
  });

  it('should have an Open button on the home page, the button should open a modal with an OK option (returning FALSE)', async () => {
    page.navigateTo();

    const button = await page.getButton();
    expect(button.getText()).toBe('Open');
    await button.click();

    const modal = await page.getConfirmationModal();
    expect(await modal.isEnabled()).toBeTruthy();

    const rejectBtn = await page.getRejectButton();

    expect(await rejectBtn.isDisplayed()).toBeTruthy();
    expect(await rejectBtn.isEnabled()).toBeTruthy();
    expect(await rejectBtn.getText()).toBe('Cancel');
    await rejectBtn.click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.ALL,
      } as logging.Entry)
    );
  });
});
