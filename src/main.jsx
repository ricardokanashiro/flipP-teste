import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyBook1 from './components/MyBook1.jsx'
import MyBook2 from './components/MyBook2.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },

   {
      path: "/journalOne",
      element: <MyBook1 />
   },

   {
      path: "/journalTwo",
      element: <MyBook2 />
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)