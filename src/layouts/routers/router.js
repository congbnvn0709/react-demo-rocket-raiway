import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";

export const LayoutRouter = createBrowserRouter([
    {
        path: 'home',
        element: <Home></Home>
    },
    {
        path: 'contact',
        element: <Contact></Contact>
    }

])