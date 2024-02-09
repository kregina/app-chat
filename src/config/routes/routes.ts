import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));
const Lobby = lazy(() => import('../../pages/Lobby/Lobby'));
const Profile = lazy(() => import('../../pages/Profile/Profile'));
const Error = lazy(() => import('../../pages/Error/Error'));

export const PATHS = {
  HOME: '/app-chat',
  LOBBY: '/lobby',
  PROFILE: '/profile',
};

export const ROUTES = [
  { path: '/app-chat', component: Home },
  { path: '/lobby', component: Lobby },
  { path: '/profile', component: Profile },
  { path: '*', component: Error }
];
