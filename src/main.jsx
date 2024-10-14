import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Admin from './Admin.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <NavBar/>
        <App/>
      </>,
    },

    {
        path: "/admin",
        element:
        <>
            <NavBar/>
            <Admin/>
        </>
    }

  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
