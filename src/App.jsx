
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {HomeLayout, About, Error, Landing, Cocktail, Newsletter} from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: '/cocktail',
        element: <Cocktail/>
      },
      {
        path: '/newsletter',
        element: <Newsletter/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  },
  
]);

function App() {

  return <RouterProvider router={router}/>
}

export default App
