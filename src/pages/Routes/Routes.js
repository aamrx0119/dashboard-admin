import Index from "../Index/Index"
import Users from "../Users/Users"
import Products from "../Products/Products"
import Product from "../Product/Product"
import Analytic from "../Analytic/Analytic"
let routes = [
    {path:'/',element:<Index></Index>},
    {path:'/users',element:<Users />},
    {path:'/products',element:<Products />},
    {path:'/product/:productID',element:<Product />},
    {path:'/analytics',element:<Analytic />},

]

export default routes
