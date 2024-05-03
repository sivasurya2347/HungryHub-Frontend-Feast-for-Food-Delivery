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
import { useContext,useState,useEffect } from 'react'
import SampleContext from './utils/sampleContext'
import { Provider } from 'react-redux'
import appStore from './redux/appStore'
import Cart from './components/Cart'

const AppLayout = () => {
    const [userName,setuserName]=useState('')

    useEffect(()=>{
        const data = {
            name : "siva"
        }
        setuserName(data.name)
    },[])

    return(
        <Provider store={appStore}>
        <SampleContext.Provider value = {{loggeduser : userName,setuserName}}>
        <div>
            <Header/>
            <Outlet /> 
        </div>
        </SampleContext.Provider>
        </Provider>
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
                path : "/cart",
                element : <Cart/>
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