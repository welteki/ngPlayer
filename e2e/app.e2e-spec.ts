import { NgPlayerPage } from './app.po';

describe('ng-player App', function() {
  let page: NgPlayerPage;

  beforeEach(() => {
    page = new NgPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
