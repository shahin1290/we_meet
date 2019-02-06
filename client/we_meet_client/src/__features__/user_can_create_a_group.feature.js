describe('user can create a group', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });

  describe('when user creates group', () => {
    
    it("renders user to group form", async () => {
      await page.click('button[id=create-group-1]')
      await expect(page).toMatch('Start a new group')
    })

    it('returns visitor to group upon successful creation', async () => {
      await expect(page).toMatch('Thanks for starting a group.')
    })
  });
})