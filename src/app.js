import React, {lazy,Suspense,useEffect,useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import Restaurant from "./components/Restautant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer_data";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from "./components/Cart";

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

const App = ()=>{
    const [userName,setUserName] = useState("raju")
    useEffect(()=>{
        setUserName("default")
    })
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    ) 
};

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
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters}/>);