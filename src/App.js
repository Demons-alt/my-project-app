import React from 'react';

// import { Counter } from './features/counter/Counter';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='font-bold text-5xl text-orange-700' >Hello world!</div>,
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
