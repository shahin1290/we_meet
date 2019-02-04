# WeMeet API app

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2fd9b247ee7e4f758a07f6ab46c7fa78)](https://app.codacy.com/app/CraftAcademy/we_meet?utm_source=github.com&utm_medium=referral&utm_content=CraftAcademy/we_meet&utm_campaign=Badge_Grade_Settings)
[![Build Status](https://semaphoreci.com/api/v1/craftacademy/we_meet/branches/development/badge.svg)](https://semaphoreci.com/craftacademy/we_meet)

[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/we_meet/badge.svg?branch=development)](https://coveralls.io/github/CraftAcademy/we_meet?branch=development)


---
WeMeet is an API-only app that helps people to organize groups and events around similar interests and topics. Users can find and attend events, create their own groups, set up group events, and connect with members.

The live site can be viewed [here]().

## Features included:
* Client can access available events
* User can RSVP to events
* User can join a group
* List groups with its events
* Organizer can create an event
* User can create a group
* Organizer can set Category for group


## Screenshots


## Tech stack
* Ruby on Rails
* Rspec for unit testing

## FrontEnd test

We are writing component specs in Jest and Enzyme

```
$ npm run tests:specs
```

We are writing acceptance tests (e2e) using Jest and Puppeteer


```
$ npm run tests:features
```

Puppeteer Matchers and API can be found on https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pageselector

## To use this code
* Clone the repo from [] and `cd` into the project folder
* Run `bundle` to install all Ruby gems
* Run `rails db:setup` to set up the database
* Run `rspec` to ensure all unit tests pass

## Team
* [Thomas](https://github.com/tochman)
* [Camron](https://github.com/CamronLDNF)
* [Jon](https://github.com/Bovverskin)
* [Shahin](https://github.com/shahin1290)
