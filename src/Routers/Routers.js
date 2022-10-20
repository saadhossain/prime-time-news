import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category/Category";
import Home from "../Components/Home/Home";
import NewsDetails from "../Components/Shared/NewsDetails";
import Main from "../Layout/Main";
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/', 
                loader: ()=> fetch('http://localhost:5000/news'),
                element:<Home></Home>
            },
            {
                path:'/category/:id', 
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`), 
                element:<Category></Category>
            },
            {
                path:'/news/:id',
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element:<PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>
            },
            {path:'/register', element:<Register></Register>},
            {path:'/login', element:<Login></Login>}
        ]
    }
])