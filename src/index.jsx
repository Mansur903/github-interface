import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import './index.css';
import Main from './components/Main';
import UserPage from './components/UserPage';
import store from './slices/store';
import ErrorPage from './components/ErrorPage';
import Avatar from './components/Avatar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/avatar',
    element: <Avatar />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
