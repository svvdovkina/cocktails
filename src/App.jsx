
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {HomeLayout, About, Error, Landing, Cocktail, Newsletter, SinglePageError} from "./pages"
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError/>,
        element: <Landing/>
      },
      {
        path: '/cocktail/:id',
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
