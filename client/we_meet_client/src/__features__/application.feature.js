require('../__mocks__/eventsMock')

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
        await expect(page).toMatch('Hackathon at Craft Academy');
        await expect(page).toMatch('Amphibian workouts');
    })
}); 
