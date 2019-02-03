describe('Homepage', () => {
    beforeAll(async () => {
        jest.setTimeout(10000);
        await page.goto(appURL);
    });

    beforeEach(async () => {
        await page.reload();
    });

    describe('navbar', () => {

        it('has a login button and a register button', async () => {
            // await page.waitForSelector('.login-btn', {visible: true,})
            // await page.waitForSelector('.register-btn', {visible: true,})
            await expect(page).toMatch('Login');
            await expect(page).toMatch('Register')
        });


        it('renders different buttons when user logged in', async () => {
            await page.click('button[id=login-btn]')
            // mock current user
            await expect(page).toMatch('Start a group')
            await expect(page).toMatch('Profile')
            await expect(page).toMatch('Logout');
        });

    })

    describe('footer', () => {

    })

}); 
