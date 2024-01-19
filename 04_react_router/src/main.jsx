import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' // Import RouterProvider from react-router-dom
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { github_info } from './Components/Github/Github.jsx'

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
      <Route path = "user/:userid" element= {<User />} />
      {/* What ever variable we are we are defining here i.e. userid we will get the automatic acess in the file defined as User */}
      <Route 
      //  we can write the entire api call here as well
      // loader={ ( ) => {}}  => using this we can show the loader till the api call is completed
      loader={github_info}
      //  This loader method will reduce the the lag to load the page

      path='github' 
      element = {<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
