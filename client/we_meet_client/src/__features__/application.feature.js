describe('WeMeet App', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    it('should display "Learn React" text on page', async () => {
        await expect(page).toMatch('Learn React');
    });

}); 