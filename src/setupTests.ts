import '@testing-library/jest-dom/extend-expect';
import 'fake-indexeddb/auto';
import 'jest-canvas-mock';
import 'jest-styled-components';
import '__mocks__/file-saver';

// Fix react-slick storyshoots – https://github.com/akiran/react-slick/issues/742
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addListener: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeListener: () => {},
  }));

window.open = jest.fn();
window.scrollTo = jest.fn();

// Mock Google Maps JavaScript API for react-places-autocomplete
const google = {
  maps: {
    places: {
      AutocompleteService: function AutocompleteService() {
        // NOOP
      },
      PlacesServiceStatus: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    Geocoder: () => {},
    GeocoderStatus: {
      ERROR: 'ERROR',
      INVALID_REQUEST: 'INVALID_REQUEST',
      OK: 'OK',
      OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
      REQUEST_DENIED: 'REQUEST_DENIED',
      UNKNOWN_ERROR: 'UNKNOWN_ERROR',
      ZERO_RESULTS: 'ZERO_RESULTS',
    },
  },
};
(window as any).google = google;

// Fail tests on any warning
// eslint-disable-next-line no-console
console.error = (message: string) => {
  throw new Error(message);
};

// TODO: remove when updating react-final-form from version 3.
// Silence ton of warnings in tests about use of deprecated methods.
// (they come from outdated libraries)
// eslint-disable-next-line no-console
console.warn = (message: string) => {
  if (
    message.startsWith('Warning: componentWillMount has been renamed') ||
    message.startsWith('Warning: componentWillReceiveProps has been renamed') ||
    message.startsWith('Warning: componentWillUpdate has been renamed')
  ) {
    // eslint-disable-next-line no-useless-return
    return;
  }
  // eslint-disable-next-line no-console
};
