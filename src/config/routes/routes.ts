import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));
const Lobby = lazy(() => import('../../pages/Lobby/Lobby'));
const Profile = lazy(() => import('../../pages/Profile/Profile'));
const Error = lazy(() => import('../../pages/Error/Error'));

const BASE_URL = '/app-chat';

export const PATHS = {
  HOME: BASE_URL,
  LOBBY: `${BASE_URL}/lobby`,
  PROFILE: `${BASE_URL}/profile`,
};

export const ROUTES = [
  { path: PATHS.HOME, component: Home },
  { path: PATHS.LOBBY, component: Lobby },
  { path: PATHS.PROFILE, component: Profile },
  { path: '*', component: Error }
];