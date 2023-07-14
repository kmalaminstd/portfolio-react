import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import Home from './pages/Home'

const DynaLayout = ()=>{
    return(
        <>
            <Nav />
            <div style={{paddingTop: "100px"}}></div>
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <DynaLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

function App() {

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
  
}

export default App
