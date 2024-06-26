import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Details from './Components/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../jobs.json")
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/Job/:id",
        element: <Details></Details>,
        loader: () => fetch("../jobs.json")
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
