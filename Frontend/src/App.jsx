import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell'
import CropAdvisor from './Pages/CropAdvisor';
import WeatherForecast from './Pages/WeatherForecast';
import LiveMarketPrice from './Pages/LiveMarketPrice';
import Learn from './Pages/Learn';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import ProductDetails from './Pages/ProductDetails';
import CartPage from './Pages/CartPage';
import ProfilePage from './Pages/ProfilePage';
import Footer from './Components/Footer';
import OrderConfirmation from './Pages/OrderConfirmation';
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/cropadvisor" element={<CropAdvisor />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/livemarketprice" element={<LiveMarketPrice />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          {/* <Route path="/farmer-dashboard" element={<FarmerDashboard />} /> */}
          {/* <Route path="/buyer-dashboard" element={<BuyerDashboard />} /> */}
          {/* <Route path="/expert-dashboard" element={<ExpertDashboard />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
