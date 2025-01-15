import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { PageWrapper } from '@/components/layouts/PageWrapper';
import StoryEpisode from '@/pages/StoryEpisode';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'episode/:episode_id',
        element: <PageWrapper title="Story Episode"><StoryEpisode /></PageWrapper>,
      },
      {
        path: '*',
        element: <PageWrapper title="Page Not Found"><NotFound /></PageWrapper>,
      },
    ],
  },
]);