import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

const LazyLoadGroceryComponent = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <BodyContainer /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/restaurant/:resId", element: <RestaurantMenu /> },
            {
                path: "/grocery", element:
                    <Suspense>
                        <LazyLoadGroceryComponent />
                    </Suspense>
            }
        ]
    },
    { path: "*", element: <Error /> },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);