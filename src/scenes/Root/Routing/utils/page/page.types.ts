import { Location } from 'history';

export interface Page {
  location: Location;
  state: {
    previouslyVisitedPage: () => string | null;
  };
}
