
beforeAll(async () => {

  const responses = {
    categories: {
      status: 200,
      headers: {},
      body: JSON.stringify({
        categories: [
          {
            id: 1,
            name: "Tech",
            image: "./assets/images/tech.png"
          },
          {
            id: 2,
            name: "Food & Drink",
            image: "./assets/images/food.png"
          },
          {
            id: 3,
            name: "Sports & Fitness",
            image: "./assets/images/fitness.png"
          },
          {
            id: 4,
            name: "Family",
            image: "./assets/images/family.png"
          },
          {
            id: 5,
            name: "Music",
            image: "./assets/images/music.png"
          },
          {
            id: 6,
            name: "Outdoors & Adventure",
            image: "./assets/images/outdoors.png"
          }
        ]
      })
    },
    events: {
      status: 200,
      headers: {
      },
      body: JSON.stringify({
        events: [
          { id: 1, title: "Event 1" },
          { id: 2, title: "Event 2" }
        ]
      })
    },

    "sign_in": {
      status: 200,
      headers: {
        vary: "Origin",
        "access-token": "AfJSIl6P1CYM0Qc0vmTfXQ",
        client: "aGh-lsYlUZasOM3mcil9cQ",
        expiry: "1550652483",
        uid: "rand@random.com",
        "token-type": "Bearer",
        "x-request-id": "234cdd6c-91e0-4b7d-8450-039604da19cc",
        "x-runtime": "0.161461",
        "access-control-max-age": "0",
        "access-control-allow-methods": "GET, POST, PUT, DELETE",
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "access-control-expose-headers": "access-token, expiry, token-type, uid, client",
        "cache-control": "max-age=0, private, must-revalidate",
        "transfer-encoding": "chunked"

      },
      body: JSON.stringify({
        data:
        {
          id: 1,
          email: "rand@random.com",
          provider: "email",
          uid: "rand@random.com",
          allow_password_change: false,
          name: null,
          nickname: null,
          image: null
        }
      })
    }
  }

  await page.on("request", async interceptedRequest => {
    const endpoint = interceptedRequest.url().split("/").pop();
    if (responses[endpoint]) {
      interceptedRequest.respond(responses[endpoint]);
    } else {
      interceptedRequest.continue();
    }
  });

  await page.setRequestInterception(true);

});

afterEach(async () => {
  await page.removeListener("request", () => { });
  await page.removeListener("response", () => { });
})


