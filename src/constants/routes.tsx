import { Navigate } from 'react-router-dom';
import Home from '@pages/Home';
import Blog from '@pages/Blog';
import Contacts from '@pages/Contacts';
import Team from '@pages/Team';
import Services from '@pages/Services';
import About from '@pages/About';
import Faq from '@pages/Faq';
import NotFound from '@pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
  },
  {
    path: '/blog',
    element: <Blog />,
    label: 'Blog',
  },
  {
    path: '/contacts',
    element: <Contacts />,
    label: 'Contacts',
  },
  {
    path: '/team',
    element: <Team />,
    label: 'Our team',
  },
  {
    path: '/services',
    element: <Services />,
    label: 'Services',
  },
  {
    path: '/about',
    element: <About />,
    label: 'About',
  },
  {
    path: '/faq',
    element: <Faq />,
    label: 'FAQ',
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const additionalRoutes = [
  {
    path: '/home',
    element: <Home />,
    label: 'Pages',
  },
  {
    path: '/services',
    element: <Services />,
    label: 'Elements',
  },
  {
    path: '/faq',
    element: <Faq />,
    label: 'FAQ',
  },
  {
    path: '/contacts',
    element: <Contacts />,
    label: 'Pricing',
  },

  {
    path: '/services',
    element: <Services />,
    label: 'Site map',
  },
];
