import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Login from './components/Signin';
import Signup from './components/Signup';
import AppTable from './components/AppTable';
import Applications from './components/Applications';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/signin',
    element: <Login />
  },
  { path: '/signup', element: <Signup /> },
  { path: '/job', element: <Applications /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
    
)
