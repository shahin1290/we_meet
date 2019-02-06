require('../__mocks__/mocks')

describe('Homepage body', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('has an Explore Categories section', () => {

        it('with "Explore categories" header text', async () => {
            await expect(page).toMatch('Explore categories');
        });
    
        it("with categories listed", async () => {
            await expect(page).toMatch('Tech');
            await expect(page).toMatch('Food & Drink');
        });
    })

}); 