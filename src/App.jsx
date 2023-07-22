import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { ScrollRestoration } from "react-router-dom"
import Contact from "./pages/Contact"
import Hire from "./pages/Hire"

const DynaLayout = ()=>{
    return(
        <>
            <Nav />
            <ScrollRestoration />
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
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: "hire",
                element: <Hire />
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
