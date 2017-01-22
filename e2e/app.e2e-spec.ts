import { MytrialprojPage } from './app.po';

describe('mytrialproj App', function() {
  let page: MytrialprojPage;

  beforeEach(() => {
    page = new MytrialprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
