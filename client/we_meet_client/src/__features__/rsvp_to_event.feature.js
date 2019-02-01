// require('../__mocks__/eventsMock')

describe('visitor can RSVP to event', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });
  
  describe('when anonymous visitor', () => {
    
    it("renders a message 'You need to sign in or sign up before continuing.'", async () => {
      await page.click('button[id=attend-event-1]')
      await expect(page).toMatch('You need to sign in or sign up before continuing.')
      // await jestPuppeteer.debug()
    })

    xit('returns visitor to event upon successful sign up', async () => {
      // sign up steps
      await expect(page).toMatch('Thanks for joining WeMeet.')
    })
  })

  describe('when user logged in', () => {

    it('displays updated attendee list upon rsvp', async () => {
      await page.click('button[id=attend-event-1]')
      await expect(page).toMatch('Your attendance is confirmed! See you at the event.')
      await expect(page).toMatch()    // how to check for an updated attendee list??
    })
    
  })
})