
beforeAll(async () => {

    const responses = {
        events: {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                events: [
                    { id: 1, title: 'Test' },
                    { id: 2, title: 'Test2' }
                ]
            })
        }
    }

    await page.on('request', async interceptedRequest => {
        const endpoint = interceptedRequest.url().split('/').pop();
        if (responses[endpoint]) {
            interceptedRequest.respond(responses[endpoint]);
        } else {
            interceptedRequest.continue();
        }
    });

    await page.setRequestInterception(true);

});
beforeAll(async () => {

    const responses = {
        events: {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                events: [
                    { id: 1, title: 'Test' },
                    { id: 2, title: 'Test2' }
                ]
            })
        }
    }

    await page.on('request', async interceptedRequest => {
        const endpoint = interceptedRequest.url().split('/').pop();
        if (responses[endpoint]) {
            interceptedRequest.respond(responses[endpoint]);
        } else {
            interceptedRequest.continue();
        }
    });

    await page.setRequestInterception(true);

});

