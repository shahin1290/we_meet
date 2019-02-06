require('../__mocks__/eventsMock')

describe('visitor can RSVP to event', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });
  
  describe('when anonymous visitor', () => {
    
    it("renders a message 'You need to sign in or sign up before continuing.'", async () => {
      await page.click('button[id=attend-event-1]')
      await expect(page).toMatch('You need to sign in or sign up before continuing.')
    })

    xit('returns visitor to event upon successful sign up', async () => {
      // sign up steps
      await expect(page).toMatch('Thanks for joining WeMeet.')
    })
  })

  describe('when user logged in', () => {

    it('displays updated attendee list upon rsvp', async () => {

      await page.click('button[id=attend-event-1]')
      await expect(page).toMatch('Your RSVP was successfylly processed')
    })
    
  })
})