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
        index: true,
        element: <PageWrapper title="首页"><Home /></PageWrapper>,
      },
      {
        path: 'story/:story_id/:num',
        element: <PageWrapper title="Story Episode"><StoryEpisode /></PageWrapper>,
      },
      {
        path: '*',
        element: <PageWrapper title="Page Not Found"><NotFound /></PageWrapper>,
      },
    ],
  },
]);