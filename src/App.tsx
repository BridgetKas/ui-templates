import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import  NavBar from './Components/navBar'
import  LayOut from './Components/layOut/layOut'
import NavBar from './Components/navBar'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<LayOut/>,
      errorElement:<p>You have made a mistake</p>,
      children:[
        {
          path:'/',
          element:<NavBar/>
        },
        {
          path:'/testiomonal',
          element:<p>This is test</p>
        },
        {
          path:'/faq',
          element:<p>This is FAQ</p>
        },
        {
          path:'/hero',
          element:<p>This is FAQ</p>
        },
        {
          path:'/portifolio',
          element:<p>This is FAQ</p>
        },
        {
          path:'/destinations',
          element:<p>This is FAQ</p>
        },
        {
          path:'/audience',
          element:<p>This is FAQ</p>
        },
        {
          path:'/services',
          element:<p>This is FAQ</p>
        },
        {
          path:'/affiliate',
          element:<p>This is FAQ</p>
        },
        {
          path:'/footer',
          element:<p>This is FAQ</p>
        },
      ]

    }
    
  ]
)

function App() {

  return (
    <div id='light'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App

