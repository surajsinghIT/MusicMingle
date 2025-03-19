import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { SONGDETAILS,HOMEPAGE } from './Utils/RouteList.js';
import Loader from './Components/Common/Loader.jsx';
import Layout from './Utils/Layout.jsx';
import RegisterUser from './Pages/RegisterUser.jsx';

// Lazy load components
const HomePage = React.lazy(() => import('./Pages/Homepage.jsx'));
const SongsDetail = React.lazy(() => import('./Pages/SongDetail.jsx'));
const router = createBrowserRouter([
  {
    // path: HOMEPAGE,
    path: REGISTER,
    element: (      
        <Layout />
    ),
    children: [
      { path: HOMEPAGE, element: <RegisterUser /> },
      { path: SONGDETAILS, element: <SongsDetail /> },
      
    ],
  },  

]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
