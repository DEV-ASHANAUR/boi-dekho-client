import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DashHome from "./pages/Dashboard/Home/Home";
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
import Dashboard from "./components/user/dashboard/Dashboard";
import UserRoute from "./components/UserRoute";
import AccountPanel from "./components/user/account/AccountPanel";
import Profile from "./components/user/account/Profile";
import Address from "./components/user/account/Address";
import Password from "./components/user/account/Password";
import Payment from "./pages/Payment/Payment";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Wishlist from "./components/user/wishlist/Wishlist";
import OrderDetails from "./components/user/order/orderdetails/OrderDetails";
import OrderHistory from "./components/user/order/OrderHistory";
import OrderFail from "./pages/OrderSuccess/OrderFail";
import OrderCancel from "./pages/OrderSuccess/OrderCancel";
import AdminRoute from "./components/AdminRoute";
import DashboardLayout from "./components/Dashboard/Layout/Layout";
import ViewCategory from "./components/Dashboard/ManageCategory/ViewCategory";
import AddCategory from "./components/Dashboard/ManageCategory/AddCategory";
import UpdateCategory from "./components/Dashboard/ManageCategory/UpdateCategory";
import ViewSubCategory from "./components/Dashboard/ManageSubCategory/ViewSubCategory";
import AddSubCategory from "./components/Dashboard/ManageSubCategory/AddSubCategory";
import UpdateSubCategory from "./components/Dashboard/ManageSubCategory/UpdateSubCategory";

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

// function DashboardLayout() {
//   return (
//     <div>
//       <Sidebar />
//       <Outlet />
//       <h1>dashboard Footer</h1>
//     </div>
//   );
// }
function App() {
  const authchecked = useAuthCheck();

  return !authchecked ? (
    <Loading />
  ) : (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="/books" element={<Books />}></Route>
          <Route path="/book/:bookId" element={<ProductView />}></Route>
          <Route path="/pre-order" element={<PreOrder />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route
            path="/check-out"
            element={
              <UserRoute>
                <Checkout />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <UserRoute>
                <Payment />
              </UserRoute>
            }
          ></Route>
          <Route path="/order-success" element={<OrderSuccess />}></Route>
          <Route path="/order-fail" element={<OrderFail />}></Route>
          <Route path="/order-cancel" element={<OrderCancel />}></Route>
          <Route path="/product-view/:id" element={<ProductView />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          {/* user route start */}
          <Route
            path="/user-dashboard"
            element={
              <UserRoute>
                <Dashboard />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/manage-account"
            element={
              <UserRoute>
                <AccountPanel />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/user-profile"
            element={
              <UserRoute>
                <Profile />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/user-address"
            element={
              <UserRoute>
                <Address />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/user-change-password"
            element={
              <UserRoute>
                <Password />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/user-order-history"
            element={
              <UserRoute>
                <OrderHistory />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/user-order-details/:orderId"
            element={
              <UserRoute>
                <OrderDetails />
              </UserRoute>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <UserRoute>
                <Wishlist />
              </UserRoute>
            }
          ></Route>
          {/* user route end */}
          <Route path="*" element={<NoPage />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
            //   <AdminRoute>
                <DashHome />
            //   </AdminRoute>
            }
          />
          <Route
            path="manage-category"
            element={
            //   <AdminRoute>
                <ViewCategory />
            //   </AdminRoute>
            }
          />
          <Route
            path="create-category"
            element={
            //   <AdminRoute>
                <AddCategory />
            //   </AdminRoute>
            }
          />
          <Route
            path="manage-category/:categoryId"
            element={
            //   <AdminRoute>
                <UpdateCategory />
            //   </AdminRoute>
            }
          />
          <Route
            path="manage-sub-category"
            element={
            //   <AdminRoute>
                <ViewSubCategory />
            //   </AdminRoute>
            }
          />
          <Route
            path="create-sub-category"
            element={
            //   <AdminRoute>
                <AddSubCategory />
            //   </AdminRoute>
            }
          />
          <Route
            path="manage-sub-category/:subcategoryId"
            element={
            //   <AdminRoute>
                <UpdateSubCategory />
            //   </AdminRoute>
            }
          />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
