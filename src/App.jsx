
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {HomeLayout, About, Landing, Cocktail, Newsletter} from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
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
