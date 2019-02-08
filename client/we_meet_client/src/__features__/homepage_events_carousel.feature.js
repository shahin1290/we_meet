require('../__mocks__/mocks')
require('../__mocks__/responseLog')

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
            await expect(page).toMatch('Hackathon');
            await expect(page).toMatch('Meetup');
        });

    })

}); 