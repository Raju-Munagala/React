import React, {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import Restaurant from "./components/Restautant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer_data";

const Grocery = lazy(()=>import("./components/Grocery"))


/*
-header
    -logo
    -options
-body
    -search
    -card-containers
        -cards
-footer
    -copyright
    -links
*/

const App = ()=>(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
);

appRouters = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters}/>);