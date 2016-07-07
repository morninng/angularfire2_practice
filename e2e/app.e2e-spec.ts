import { Setup3Page } from './app.po';

describe('setup3 App', function() {
  let page: Setup3Page;

  beforeEach(() => {
    page = new Setup3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
