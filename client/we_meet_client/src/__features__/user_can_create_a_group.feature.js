describe('Group creation form', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });

  describe('user can access and use the group form', () => {
    
    it('should render the group form', async () => {
      await page.click('input[value="Start a new group"]')
      await expect(page).toMatch('Create a new group')
    })

    it("should successfully create the group", async () => {    
      await page.type('input[name="name"]', 'Group name');
      await page.type('input[name="description"]', 'About group text');
      await page.select('#category-selector', 'Tech');
      await page.type('input[name="location"]', 'Stockholm');
      await page.click('input[value="Submit"]')
      await expect(page).toMatch('Congratulations, your group has been created!')

    })
  });
})