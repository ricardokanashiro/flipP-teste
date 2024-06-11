import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyBook1 from './components/MyBook1.jsx'
import MyBook2 from './components/MyBook2.jsx'

const router = createBrowserRouter([
   {
      path: "/jounal-one",
      element: <MyBook1 />
   },

   {
      path: "/journal-two",
      element: <MyBook2 />
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)