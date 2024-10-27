import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/strategy-step1",
      element: localStorage.getItem('ADMIN') ? <Step1/> : <Login/>,
    },
    {
      path:"/strategy-step2",
      element:localStorage.getItem('ADMIN') ? <Step2/> : <Login/>,
    },
    {
      path:"/strategy-step3",
      element:localStorage.getItem('ADMIN') ? <Step3/> : <Login/>,
    }
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);


