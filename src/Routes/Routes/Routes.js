import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddCoach from "../../Pages/Dashboard/AddCoach/AddCoach";
import AddPlayer from "../../Pages/Dashboard/AddPlayer/AddPlayer";
import AllCoach from "../../Pages/Dashboard/AllCoach/AllCoach";
import AllMambers from "../../Pages/Dashboard/AllMambers/AllMambers";
import AllPlayer from "../../Pages/Dashboard/AllPlayer/AllPlayer";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Messanger from "../../Pages/Dashboard/Messanger/Messanger";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allplayer',
                element: <AllPlayer></AllPlayer>
            },
            {
                path: '/dashboard/message',
                element: <Messanger></Messanger>
            },
            {
                path: '/dashboard/allcoach',
                element: <AllCoach></AllCoach>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllMambers></AllMambers></AdminRoute>
            },
            {
                path: '/dashboard/addplayer',
                element: <AdminRoute><AddPlayer></AddPlayer></AdminRoute>
            },
            {
                path: '/dashboard/addcoach',
                element: <AdminRoute><AddCoach></AddCoach></AdminRoute>
            }
        ]
    }
])

// https://splash.stylemixthemes.com/soccer/#1485157818934-aac1143d-bb7c