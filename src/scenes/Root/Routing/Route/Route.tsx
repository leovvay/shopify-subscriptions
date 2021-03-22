import React from 'react';

import { Route as StandardRoute } from 'react-router-dom';

import { Props } from './Route.types';
import { RouteTypes } from './Route.data';

export function Route({ routeType = RouteTypes.secure, ...routeProps }: Props) {
  return <StandardRoute {...routeProps} />;
}
