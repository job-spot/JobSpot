import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppTable from './components/AppTable';
import Signin from './components/Signin';
import Signup from './components/Signup';
import SignedInDashboard from './components/SignedInDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/job',
    element: <SignedInDashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
