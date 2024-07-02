import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Contact from "../layouts/Contact";
import Layout from "../layouts/Layout";
import App from "../App";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'home',
        element: <Home></Home>
    },
    {
        path: 'contact',
        element: <Contact></Contact>
    }
])