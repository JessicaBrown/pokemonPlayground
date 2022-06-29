// import lscache from 'lscache';
// import * as Sentry from '@sentry/react';
// import get from 'lodash/get';

// import { history } from '../store';
// import { displayErrorMessage } from '../utils';

// export const getAPIConfig = () => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${lscache.get('accessToken')}`,
//       'Content-Type': 'application/json',
//     },
//   };
//   return config;
// };

// export const errorHandler = (error, backupErrorMessage) => {
//   Sentry.captureException(error);
//   const status = get(error, 'response.status', '');
//   if (error.response && status === 401) {
//     lscache.flush();
//     history.push('/login');
//   }
//   if (status !== 401) displayErrorMessage(error, backupErrorMessage);
// };
// //
// /* eslint-disable no-console */
// export const requestLogger = request => {
//   console.groupCollapsed(
//     '%c[Axios][Request]:',
//     'color: #e0e024; font-weight: 700;',
//     `${request.method} ${request.url}`
//   );
//   console.log('%cHeaders:', 'color: #9E9E9E; font-weight: 700;', request.headers);
//   console.log('%cTimeout:', 'color: #9E9E9E; font-weight: 700;', request.timeout);
//   console.groupEnd();

//   return request;
// };

// export const errorLogger = error => {
//   const {
//     config: { url, method },
//     message,
//     response,
//   } = error;

//   console.groupCollapsed('%c[Axios][Error]:', 'color: #CC3300; font-weight: 700;', `${method} ${url}`);

//   if (response) {
//     console.log('%cStatus:', 'color: #9E9E9E; font-weight: 700;', response.status);
//   }

//   console.log('%cMessage:', 'color: #9E9E9E; font-weight: 700;', message);
//   console.groupEnd();

//   return Promise.reject(error);
// };

// export const responseLogger = response => {
//   const {
//     config: { url, method },
//     status,
//     data,
//   } = response;

//   console.groupCollapsed('%c[Axios][Response]:', 'color: #3fb832; font-weight: 700;', `${method} ${url}`);
//   console.log('%cStatus:', 'color: #9E9E9E; font-weight: 700;', status);
//   console.log('%cData:', 'color: #9E9E9E; font-weight: 700;', data);

//   console.groupEnd();

//   return response;
// };
// /* eslint-enable no-console */
