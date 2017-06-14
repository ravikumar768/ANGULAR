import { QDMLPage } from './app.po';

describe('qdml App', () => {
  let page: QDMLPage;

  beforeEach(() => {
    page = new QDMLPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
