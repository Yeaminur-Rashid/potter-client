// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from './providers/AuthProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>
 </div>
);