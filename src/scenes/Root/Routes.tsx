import React from 'react';
import { Switch, useLocation } from 'react-router-dom';

interface RouteFile {
  default: (key: number | string) => JSX.Element;
}

function importAll() {
  const ctx = require.context('scenes', true, /\.route.tsx$/);
  return ctx.keys().map<RouteFile>(ctx);
}

export const routeFiles = importAll();

function usePageViews() {
  const location = useLocation();
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('change location', location);
  }, [location]);
}

export const Routes = () => {
  usePageViews();
  return (
    <Switch>
      {routeFiles.map((_, index) => {
        const Component = routeFiles[index].default;
        return Component(index);
      })}
    </Switch>
  );
};
