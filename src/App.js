import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Services from './Home/Home/Services/Services';
import ServiceDetails from './Home/ServiceDetails/ServiceDetails';
import Main from './Layout/Main';
import Login from './Register/Login/Login';
import SignUp from './Register/SignUp/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/services',
          element:<Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/serviceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
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
