import { RouteProps } from 'react-router-dom';

export type SecureRouting = 'secure';
export type StandardRouting = 'standard';

export type RouteType = SecureRouting | StandardRouting;

export interface Props extends RouteProps {
  routeType?: RouteType;
}
