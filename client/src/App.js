import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//pages
import Checkout from "./pages/Checkout.page";
import GoogleAuth from "./pages/GoogleAuth.page";
import Restaurant from "./pages/Restaurant.page";
import Home from "./pages/Home.page";

//components
import Menu from "./components/Restaurant/Menu";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Overview from "./components/Restaurant/Overview";
import Photos from "./components/Restaurant/Photos";
import Reviews from "./components/Restaurant/Reviews";
import RestaurantLayout from "./layouts/Restaurant.layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigate to="/delivery" /> } />
        <Route path="/:type" element={ <Home /> } />
        <Route path="/google/:token" element={ <GoogleAuth /> } />
        <Route path="/restaurant/:id" element={
          <RestaurantLayout>
            <Restaurant />
          </RestaurantLayout>
        }>
          <Route path="overview" element={ <Overview /> } />
          <Route path="order-online" element={ <OrderOnline /> } />
          <Route path="reviews" element={ <Reviews /> } />
          <Route path="photos" element={ <Photos /> } />
          <Route path="menu" element={ <Menu /> } />
        </Route>
        <Route path="/checkout/orders" element={ <Checkout /> } />
      </Routes >
    </>
  );
}

export default App;
