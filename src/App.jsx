
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {HomeLayout, About, Error, Landing, Cocktail, Newsletter, SinglePageError} from "./pages"
import { loader as landingLoader } from './pages/Landing';
import {loader as singleCocktailLoader} from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5 // 5 mins
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError/>,
        element: <Landing/>
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError/>,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail/>
      },
      {
        path: '/newsletter',
        element: <Newsletter/>,
        action: newsletterAction
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  },
  
]);

function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
  
}

export default App
