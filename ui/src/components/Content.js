import {Route, Switch} from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NewProductPage from "../pages/NewProductPage/NewProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import EditOrderPage from "../pages/EditOrderPage/EditOrderPage";
import SecuredRoute from "./SecuredRoute/SecuredRoute";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Profile from "./Profile/Profile";

export default () => {

    return (
        <>
            <Switch>
                <SecuredRoute role="ADMIN" path="/admin/products/edit/:id" render={({match}) => (
                    <EditProductPage id={match.params.id}/>
                )}/>

                <SecuredRoute role="ADMIN" path="/admin/products/create">
                    <NewProductPage/>
                </SecuredRoute>

                <SecuredRoute role="ADMIN" path="/admin/orders/edit/:id">
                    <EditOrderPage/>
                </SecuredRoute>

                <SecuredRoute role="ADMIN" path="/admin/products">
                    <ProductsPage/>
                </SecuredRoute>

                <SecuredRoute role="ADMIN" path="/admin/orders">
                    <OrdersPage/>
                </SecuredRoute>

                <Route path="/login">
                    <LoginPage/>
                </Route>

                <Route path="/signup">
                    <RegisterPage/>
                </Route>

                <SecuredRoute role={["USER", "ADMIN"]} path="/account">
                    <Profile/>
                </SecuredRoute>

                <SecuredRoute role="ADMIN" path="/admin">
                    <AdminDashboard/>
                </SecuredRoute>

                <SecuredRoute role={["USER", "ADMIN"]} path="/products">
                    <OrderPage/>
                </SecuredRoute>

                <Route exact path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </>
    )
}