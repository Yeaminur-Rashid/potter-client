import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home/Home";
import MoreBook from "../pages/BookService/MoreBook";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/login/Login";
// import CheckOut from "../pages/CheckOut/CheckOut";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/Home/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [{
        path: '/',
         element:<Home></Home>
    },
    {
      path: '/about',
      element: <About></About>,
      loader: () => fetch('https://potter-hub-server.onrender.com/alldata')
    },


  {
    path : '/login',
    element: <Login></Login>
  },
  {
    path : 'signup',
    element : <SignUp></SignUp>,
  },
  {
    path : 'bookings',
    element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
 
  },
  {
    path : 'book/:id',
    element : <BookService></BookService>,
    loader : ({params}) => fetch(`https://potter-hub-server.onrender.com/${params.id}`)
  },
  {
    path : 'book/:id',
    element : <MoreBook></MoreBook>,
    loader : ({params}) => fetch(`https://potter-hub-server.onrender.com/alldata/${params.id}`)
  }
]
    }
])
    
    
export default router;