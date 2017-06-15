import { MatDashboardsPage } from './app.po';

describe('mat-dashboards App', () => {
  let page: MatDashboardsPage;

  beforeEach(() => {
    page = new MatDashboardsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
