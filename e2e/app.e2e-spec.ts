import { NgEksisozlukPage } from './app.po';

describe('ng-eksisozluk App', () => {
  let page: NgEksisozlukPage;

  beforeEach(() => {
    page = new NgEksisozlukPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
