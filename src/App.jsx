
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Landing, About} from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/about',
    element: <About/>
  }
]);

function App() {

  return <RouterProvider router={router}/>
}

export default App
