import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <BodyContainer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        errorElement: <Error />
    },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Error /> },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);