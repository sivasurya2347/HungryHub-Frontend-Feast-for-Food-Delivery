import React from 'react'
import {lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import {createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom"
// import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Shimmer from './components/Shimmer'

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Outlet />
        </div>
    )
};

const About = lazy(()=>import('./components/About'))

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children :[
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurants/:restId",
                element : <RestaurantMenu/>
            },
        ],
        errorElement : <Error/>
    },
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);