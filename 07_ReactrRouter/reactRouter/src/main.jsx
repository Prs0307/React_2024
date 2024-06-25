/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/Dev/About'
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github , {githubInfoLoader} from './components/GITHUB/Github'
// import from './components/GITHUB/Github'
// create a router

// const router =createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"/about",
//           element:<About/>
//         },
//         {
//           path:"/contact",
//           element:<Contact/>
//         }
        
//       ]

//     }
//   ]
// )
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/user/:userid' element={<User/>}  />
      <Route 
      loader={githubInfoLoader}
      path='/github' 
      element={<Github/>}  
      
      />
     


    </Route>


  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

  <RouterProvider router={router} /> 

  {/* it takes only Routes */}
  </React.StrictMode>
)
