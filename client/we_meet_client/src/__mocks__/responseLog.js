// Can be used to catc h the response body and headers from your AJAX calls
// Usage: require this file in your feature test
// require('../__mocks__/responseLog')

beforeAll(async () => {
  await page.on("response", async response => {
    // We want to identify the endpoint so that we only display relevant info
    const source = response.request().url().split("/").pop();
    // This is an example of endpoints we want to monitor
    // This conditional can of course be removed or edited

    if (source === "sign_in" || source === "events") {
      let json = await (await response.json())
      let headers = await (await response.headers())
      console.log("Intecepted responce from: " + source)
      console.log(json)
      console.log(headers)
    }
  })
})

