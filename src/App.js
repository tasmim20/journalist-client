import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllServices from './Home/Home/AllServices/AllServices';
import Home from './Home/Home/Home';
import Services from './Home/Home/Services/Services';
import AllReviews from './Home/ServiceDetails/AllReviews/AllReviews';
import Reviews from './Home/ServiceDetails/Reviews/Reviews';
import ReviewSection from './Home/ServiceDetails/ReviewSection/ReviewSection';
import ServiceDetails from './Home/ServiceDetails/ServiceDetails';
import Main from './Layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './Register/AddService/AddService';
import Login from './Register/Login/Login';
import MyReviews from './Register/MyReviews/MyReviews';
import SignUp from './Register/SignUp/SignUp';
import Blog from './Shared/Blog/Blog';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          loader: () => fetch('https://journalist-server.vercel.app/servicesLimit')
        },
        {
          path:'/allServices',
          element:<AllServices></AllServices>,
          loader: () => fetch('https://journalist-server.vercel.app/services')
        },
        {
          path: '/services',
          element:<Services></Services>,
          loader: () => fetch('https://journalist-server.vercel.app/servicesLimit')
        },
        {
          path: '/serviceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://journalist-server.vercel.app/services/${params.id}`)
        },
        {
          path: '/reviewSection/:id',
          element:<ReviewSection></ReviewSection>,
          loader: ({params}) => fetch(`https://journalist-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/reviews/:id',
          element:<Reviews></Reviews>,
          loader: ({params}) => fetch(`https://journalist-server.vercel.app/services/${params.id}`)

        },
        {
         path:'/allReviews',
         element:<AllReviews></AllReviews>,
         loader: () => fetch('https://journalist-server.vercel.app/reviews')
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/myReviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path:'/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>

        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
