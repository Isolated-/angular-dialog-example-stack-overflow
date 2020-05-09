import { browser, by, element, WebElement } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async getButton(): Promise<WebElement> {
    return element(by.id('confirmationButton')).getWebElement();
  }

  async getConfirmationModal(): Promise<WebElement> {
    return element(by.id('confirmation')).getWebElement();
  }

  async getAcceptButton(): Promise<WebElement> {
    return element(by.id('acceptBtn')).getWebElement();
  }

  async getRejectButton(): Promise<WebElement> {
    return element(by.id('rejectBtn')).getWebElement();
  }
}
