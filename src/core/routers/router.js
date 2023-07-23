import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/landingPage";

const routers = createBrowserRouter([
    {
        path: '',
        element: <LandingPage />
    }
])

export default routers;