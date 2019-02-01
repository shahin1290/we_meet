// require('../__mocks__/eventsMock')

describe('visitor can RSVP to event', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });

  xit('should route visitor to sign up & log in page upon RSVP', async () => {
    await page.click('input[name=.... key???]');   // how to click the right rsvp link
                                                  // how to confirm no user credentials
    await page.content('To RSVP, you must first sign up or log in')
    await expect(page).toMatch('Please sign up or sign in')
  })
  
  describe('when anonymous visitor', () => {
    
    it("renders a message 'You have to be logged in'", async () => {
      await page.click('button[id=attend-event-1]')
      await jestPuppeteer.debug()
    })

  })

  // describe('when anonymous user', () => {

  //   it('should route anonymous user to event attendance confirmation upon log in up', async () => {
      
  //   })

  // })
})