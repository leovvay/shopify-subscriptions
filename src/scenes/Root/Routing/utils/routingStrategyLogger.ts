import { isProduction } from 'config';

interface ReportedError {
  error: string;
  componentStack: string;
  meta?: { [key: string]: string };
}

export function routingSrategyReportError(error: ReportedError) {
  if (isProduction || process.env.REACT_APP_ENV === 'test') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('%cRouting Strategy Error: ', 'color: #dc143c', error);
}
