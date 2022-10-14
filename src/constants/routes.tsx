import Home from '@pages/Home';
import Blog from '@pages/Blog';
import Contacts from '@pages/Contacts';
import Team from '@pages/Team';
import Services from '@pages/Services';
import About from '@pages/About';
import Faq from '@pages/Faq';
import NotFound from '@pages/NotFound';
import Solutions from '@pages/Solutions';
import News from '@pages/News';
import { Navigate } from 'react-router-dom';

export const routes = [
  {
    path: '',
    element: <Navigate to="/themeforest/home" replace />,
    label: '',
    isNav: false,
  },
  {
    path: '/themeforest',
    element: <Navigate to="/themeforest/home" replace />,
    label: '',
    isNav: false,
  },
  {
    path: '/themeforest/home',
    element: <Home />,
    label: 'Home',
    isNav: true,
  },
  {
    path: '/themeforest/blog',
    element: <Blog />,
    label: 'Blog',
    isNav: true,
  },
  {
    path: '/themeforest/blog/:id',
    element: <News />,
    label: 'News',
    isNav: false,
  },
  {
    path: '/themeforest/solutions',
    element: <Solutions />,
    label: 'Solutions',
    isNav: true,
  },
  {
    path: '/themeforest/contacts',
    element: <Contacts />,
    label: 'Contacts',
    isNav: true,
  },
  {
    path: '/themeforest/team',
    element: <Team />,
    label: 'Our team',
    isNav: true,
  },
  {
    path: '/themeforest/services',
    element: <Services />,
    label: 'Services',
    isNav: true,
  },
  {
    path: '/themeforest/about',
    element: <About />,
    label: 'About',
    isNav: true,
  },
  {
    path: '/themeforest/faq',
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
    path: '/themeforest/404',
    element: <NotFound />,
    label: 'Pages',
    isNav: true,
  },
  {
    path: '/themeforest/404',
    element: <NotFound />,
    label: 'Elements',
    isNav: true,
  },
  {
    path: '/themeforest/faq',
    element: <Faq />,
    label: 'FAQ',
    isNav: true,
  },
  {
    path: '/themeforest/404',
    element: <NotFound />,
    label: 'Pricing',
    isNav: true,
  },

  {
    path: '/themeforest/404',
    element: <NotFound />,
    label: 'Site map',
    isNav: true,
  },
];
