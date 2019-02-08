require('../__mocks__/mocks')

describe('SPA routing', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('routes to views selected', () => {
        it('should show specific event view from events carousel', async () => {
            await page.click('#card')
            await expect(page).toMatch('Hackathon at Craft Academy')
            await expect(page).toMatch('sthlm')
            await expect(page).toMatch('2019-12-12')
        });
    
    })

});