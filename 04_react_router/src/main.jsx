import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' // Import RouterProvider from react-router-dom
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'

// let router  = createBrowserRouter([
//   {
//     patht : '/',
//     element : <Layout />,
//     children : [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element = { <Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contact" element = {<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
