import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Photography } from './pages/Photography';
import { FacePainting } from './pages/FacePainting';
import { Design } from './pages/Design';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'photography', Component: Photography },
      { path: 'face-painting', Component: FacePainting },
      { path: 'design', Component: Design },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
