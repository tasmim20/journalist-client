import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Services from './Home/Home/Services/Services';
import Main from './Layout/Main';

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
