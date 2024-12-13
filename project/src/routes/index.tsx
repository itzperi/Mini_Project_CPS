import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Library } from '../pages/Library';
import { Search } from '../pages/Search';
import { Profile } from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);