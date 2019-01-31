require('../__mocks__/registrationMock')

describe('visitor can RSVP to event', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });

  it('should list 2 events', async () => {
    const liElementsCount = await page.$$eval('li', arr => arr.length);
    await expect(liElementsCount).toEqual(2)
  })

  it('should route visitor to sign up & log in page upon RSVP', async () => {
    await page.click('input[name=.... key???]');   // how to click the right rsvp link
                                                  // how to confirm no user credentials
    await page.content('To RSVP, you must first sign up or log in')
    await expect(page).toMatch('Please sign up or sign in')
  })
  
  describe('when anonymous visitor', () => {
    
    it('should route anonymous visitor to event attendance confirmation upon sign up', async () => {

    })

  })

  desribe('when anonymous user', () => {

    it('should route anonymous user to event attendance confirmation upon log in up', async () => {
      
    })

  })
})