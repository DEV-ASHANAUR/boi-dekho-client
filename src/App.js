import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import ProductView from "./pages/ProductView/ProductView";
import NoPage from "./pages/NoPage/NoPage";
import PreOrder from "./pages/PreOrder/PreOrder";
import TopHeader from "./components/SharedComponents/Topbar/TopHeader";
import Header from "./components/SharedComponents/Navbar/Header";
import Footer from "./components/SharedComponents/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./components/SharedComponents/Loading/Loading";
import PublicRoute from "./components/PublicRoute";



function Layout() {
    return (
        <>
            <TopHeader />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
function App() {
    const authchecked = useAuthCheck();

    return !authchecked ? (<Loading />)

        : (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                        <Route path="/books" element={<Books />}></Route>
                        <Route path="/book/:bookId" element={<ProductView />}></Route>
                        <Route path="/pre-order" element={<PreOrder />}></Route>
                        <Route
                            path="/shopping-cart"
                            element={<ShoppingCart />}
                        ></Route>
                        <Route path="/check-out" element={<Checkout />}></Route>
                        <Route
                            path="/product-view/:id"
                            element={<ProductView />}
                        ></Route>
                        <Route path="/contact-us" element={<Contact />}></Route>
                        <Route path="*" element={<NoPage />}></Route>
                    </Route>
                </Routes>
            </div>
        );
}

export default App;
