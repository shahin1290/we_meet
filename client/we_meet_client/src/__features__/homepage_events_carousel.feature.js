require('../__mocks__/eventsMock')

describe('Homepage body', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('displays an events carousel', () => {

        it('with "Events near you" header text', async () => {
            await expect(page).toMatch('Events near you');
        });
    
        it("with events listed", async () => {
            await expect(page).toMatch('Event 1');
            await expect(page).toMatch('Event 2');
        })

    })

}); 