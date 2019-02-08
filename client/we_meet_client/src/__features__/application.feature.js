require('../__mocks__/mocks')

describe('WeMeet App', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    it('should display WeMeet logo on page', async () => {
        await expect(page).toMatchElement('#logo')
    });

    it("should list 2 events", async () => {
        await page.waitFor(1000)
        await expect(page).toMatch('Hackathon at Craft Academy');
        await expect(page).toMatch('Meetup at Craft Academy');
    })
}); 
