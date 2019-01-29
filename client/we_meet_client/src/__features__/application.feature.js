describe('WeMeet App', () => {
  beforeAll(async () => {
      await page.goto('http://localhost:3001');
  });

  beforeEach(async () => {
      await page.reload();
  });

  it('should display "Learn React" text on page', async () => {
      await expect(page).toMatch('Learn React');
  });

}); 