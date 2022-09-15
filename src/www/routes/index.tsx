import {
    createBrowserRouter
} from "react-router-dom";
import FourOhFour from "./FourOhFour";
import Home from "./Home";

export default createBrowserRouter([
    {
        path: "*",
        element: <FourOhFour />
    },
    {
        path: "/",
        element: <Home />
    }
])