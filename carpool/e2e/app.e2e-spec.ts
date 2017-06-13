import { CarpoolPage } from './app.po';

describe('carpool App', () => {
  let page: CarpoolPage;

  beforeEach(() => {
    page = new CarpoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
