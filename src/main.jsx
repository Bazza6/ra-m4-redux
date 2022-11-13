import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Data, Profile } from './pages'
import { paths } from './constants'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: paths.home,
  },
  {
    element: <Data />,
    path: paths.data,
  },
  {
    element: <Profile />,
    path: paths.profile,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
