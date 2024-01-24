import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../views/Home/Home";
import Error404 from "../views/Error404/Error404";
import HomeCare from "../views/HomeCare/HomeCare";
import Nurcery from "../views/Nurcery/Nurcery";
import Signup from "../views/Signup/Signup";
import Login from "../views/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path: "/home-care",
        element: <HomeCare/>,
    },
    {
        path: "/nurcery",
        element: <Nurcery/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
]);

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;