require('../__mocks__/eventsMock')

describe('WeMeet App', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    it('should display "WeMeet" text on page', async () => {
        await expect(page).toMatch('WeMeet');
    });

    it("should list 2 events", async () => {
        const liElementsCount = await page.$$eval('li', arr => arr.length);
        await expect(liElementsCount).toEqual(2)
    })
}); 
