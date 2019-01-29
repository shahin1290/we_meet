import { events } from './eventsIndex.json';

const EVENTS_INDEX_ENDPOINT = 'http://localhost:3000/events';

const paths = {
  get: jest.fn((url) => {
    switch (url) {
      case EVENTS_INDEX_ENDPOINT:
        return Promise.resolve({
          data: events
        });
    }
  })
};

export default paths;

// export default {
//   get: jest.fn(() => Promise.resolve({ data: { events: { name: "Test" } } }))
// };

