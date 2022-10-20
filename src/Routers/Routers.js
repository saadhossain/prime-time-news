import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category/Category";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/', loader: ()=> fetch('http://localhost:5000/news'),element:<Home></Home>},
            {path:'/category/:id', loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`), element:<Category></Category>}
        ]
    }
])