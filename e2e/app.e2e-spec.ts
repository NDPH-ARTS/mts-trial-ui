import { MtsTrialUiPage } from './app.po';

describe('mts-trial-ui App', () => {
  let page: MtsTrialUiPage;

  beforeEach(() => {
    page = new MtsTrialUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
