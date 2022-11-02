import { Navigate } from 'react-router-dom';

import About from '@pages/About';
import Blog from '@pages/Blog';
import Contacts from '@pages/Contacts';
import Faq from '@pages/Faq';
import Home from '@pages/Home';
import News from '@pages/News';
import NotFound from '@pages/NotFound';
import Services from '@pages/Services';
import Solutions from '@pages/Solutions';
import Team from '@pages/Team';

export const enum Paths {
  BASE = '/themeforest',
  ROOT = '/',
  HOME = 'home',
  BLOG = 'blog',
  SERVICES = 'services',
  SOLUTIONS = 'solutions',
  FAQ = 'faq',
  CONTACTS = 'contacts',
  ABOUT = 'about',
  TEAM = 'team',
  NOT_FOUND = '404',
}

export const getPageUrl = (path: Paths) => `${Paths.BASE}/${path}`;
export const getNewsUrl = (id: string) => `${getPageUrl(Paths.BLOG)}/${id}`;

const HomeRedirection = <Navigate to={getPageUrl(Paths.HOME)} replace />;

export const routes = [
  {
    path: '',
    element: HomeRedirection,
    label: '',
    isNav: false,
  },
  {
    path: Paths.BASE,
    element: HomeRedirection,
    label: '',
    isNav: false,
  },
  {
    path: getPageUrl(Paths.HOME),
    element: <Home />,
    label: 'Home',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.BLOG),
    element: <Blog />,
    label: 'Blog',
    isNav: true,
  },
  {
    path: `${getPageUrl(Paths.BLOG)}/:id`,
    element: <News />,
    label: 'News',
    isNav: false,
  },
  {
    path: getPageUrl(Paths.SOLUTIONS),
    element: <Solutions />,
    label: 'Solutions',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.CONTACTS),
    element: <Contacts />,
    label: 'Contacts',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.TEAM),
    element: <Team />,
    label: 'Our team',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.SERVICES),
    element: <Services />,
    label: 'Services',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.ABOUT),
    element: <About />,
    label: 'About',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.FAQ),
    element: <Faq />,
    label: 'FAQ',
    isNav: true,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const additionalRoutes = [
  {
    path: getPageUrl(Paths.NOT_FOUND),
    element: <NotFound />,
    label: 'Pages',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.NOT_FOUND),
    element: <NotFound />,
    label: 'Elements',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.FAQ),
    element: <Faq />,
    label: 'FAQ',
    isNav: true,
  },
  {
    path: getPageUrl(Paths.NOT_FOUND),
    element: <NotFound />,
    label: 'Pricing',
    isNav: true,
  },

  {
    path: getPageUrl(Paths.NOT_FOUND),
    element: <NotFound />,
    label: 'Site map',
    isNav: true,
  },
];
