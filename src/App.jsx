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
import PrivateRoute from './Components/PrivateRoute';
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<PrivateRoute><Buy /></PrivateRoute>} />
          <Route path="/sell" element={<PrivateRoute><Sell /></PrivateRoute>} />
          <Route path="/cropadvisor" element={<PrivateRoute><CropAdvisor /></PrivateRoute>} />
          <Route path="/weather" element={<PrivateRoute><WeatherForecast /></PrivateRoute>} />
          <Route path="/livemarketprice" element={<PrivateRoute><LiveMarketPrice /></PrivateRoute>} />
          <Route path="/learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/order-confirmation" element={<PrivateRoute><OrderConfirmation /></PrivateRoute>} />
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
