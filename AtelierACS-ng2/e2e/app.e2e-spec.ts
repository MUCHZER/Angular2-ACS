import { AtelierACSPage } from './app.po';

describe('atelier-acs App', function() {
  let page: AtelierACSPage;

  beforeEach(() => {
    page = new AtelierACSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
