import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category/Category";
import Home from "../Components/Home/Home";
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import NewsDetails from "../Components/Shared/NewsDetails";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://prime-news.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://prime-news.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://prime-news.vercel.app/news/${params.id}`),
                element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>
            },
            { path: '/register', element: <Register></Register> },
            { path: '/login', element: <Login></Login> }
        ]
    }
])