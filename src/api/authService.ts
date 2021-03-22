import axios from 'axios';
import { BACKEND_API } from './index';

export const authService = axios.create({
  baseURL: `${BACKEND_API}/auth`,
});

const DEBUG = process.env.NODE_ENV === 'development';

let isMockingEnabled = false;

const mocks = {
  '/login': {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {
      'Set-Cookie': 'token=Barer 123123123',
    },
    isMock: true,
  },
};

export function addAuthMock(url: string, data: any) {
  // @ts-ignore
  mocks[url] = data;
}

export function enableAuthMocking() {
  isMockingEnabled = true;
}

const getMockResponse = (mockError: any) => {
  const defaultResponse = {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    isMock: true,
  };

  const path = mockError.config.url;
  // @ts-ignore
  const Response = mocks[path] || defaultResponse;
  // Handle mocked success
  return Promise.resolve(Response);
};

axios.interceptors.request.use(
  config => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) {
      console.info('Auth Service:', config);
    }
    return config;
  },
  error => {
    if (DEBUG) {
      console.error('Auth Service Error:', error);
    }
    return Promise.reject(error);
  },
);

authService.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    if (isMockingEnabled) {
      return getMockResponse(error);
    }

    return Promise.reject(error);
  },
);

authService.interceptors.request.use();

export interface LoginResponse {
  token: string;
  userData: any;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export const loginRequest = (loginData: LoginRequest) =>
  authService.post<LoginResponse>('/login', loginData);
