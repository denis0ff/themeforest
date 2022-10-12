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
    element: <Navigate to="/home" replace />,
    label: '',
    isNav: false,
  },
  {
    path: '/home',
    element: <Home />,
    label: 'Home',
    isNav: true,
  },
  {
    path: '/blog',
    element: <Blog />,
    label: 'Blog',
    isNav: true,
  },
  {
    path: '/blog/:id',
    element: <News />,
    label: 'News',
    isNav: false,
  },
  {
    path: '/solutions',
    element: <Solutions />,
    label: 'Solutions',
    isNav: true,
  },
  {
    path: '/contacts',
    element: <Contacts />,
    label: 'Contacts',
    isNav: true,
  },
  {
    path: '/team',
    element: <Team />,
    label: 'Our team',
    isNav: true,
  },
  {
    path: '/services',
    element: <Services />,
    label: 'Services',
    isNav: true,
  },
  {
    path: '/about',
    element: <About />,
    label: 'About',
    isNav: true,
  },
  {
    path: '/faq',
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
    path: '/home',
    element: <Home />,
    label: 'Pages',
    isNav: true,
  },
  {
    path: '/404',
    element: <NotFound />,
    label: 'Elements',
    isNav: true,
  },
  {
    path: '/faq',
    element: <Faq />,
    label: 'FAQ',
    isNav: true,
  },
  {
    path: '/404',
    element: <NotFound />,
    label: 'Pricing',
    isNav: true,
  },

  {
    path: '/404',
    element: <NotFound />,
    label: 'Site map',
    isNav: true,
  },
];
