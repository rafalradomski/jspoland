import { JspolandPage } from './app.po';

describe('jspoland App', () => {
  let page: JspolandPage;

  beforeEach(() => {
    page = new JspolandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
