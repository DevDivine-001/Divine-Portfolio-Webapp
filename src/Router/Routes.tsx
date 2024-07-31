import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import LandingPages from "../Pages/LandingPages";
import About from "../Pages/Links/About";
import Services from "../Pages/Links/Services";
import PortFolios from "../Pages/Links/PortFolios";
import Blog from "../Pages/Links/Blog";
import Contact from "../Pages/Links/Contact";

export const routes = createBrowserRouter([{
    path:"/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <LandingPages/>,
        },
        {
            path: "/about",
            element: <About/>,
            index:true,
        },
        {
            path: "/services",
            element: <Services/>,
            index:true,
        },
        {
            path: "/portfolios",
            element: <PortFolios/>,
            index:true,
        },
        {
            path: "/blog",
            element: <Blog/>,
            index:true,
        },
        {
            path: "/contact",
            element: <Contact/>,
            index:true,
        },
    ]
}])