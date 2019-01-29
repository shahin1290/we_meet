module.exports = {
  launch: {
      headless: false,
      slowMo: 10,
      devtools: true,
      args: ["--no-sandbox", "--disable-popup-blocking", "--disable-infobars"]
  },
  browserContext: 'default',

  server: {
      command: `PORT=3001 BROWSER=none npm run start `,
      port: 3001,
      launchTimeout: 4000,
  }
}