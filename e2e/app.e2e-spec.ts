import { AngularFromsPage } from './app.po';

describe('angular-froms App', () => {
  let page: AngularFromsPage;

  beforeEach(() => {
    page = new AngularFromsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
