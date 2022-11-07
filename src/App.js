import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
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
