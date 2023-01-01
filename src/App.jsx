import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Notfound from "./pages/Notfound/Notfound";
import Shop from "./pages/Shop/Shop";
import Prodactdetails from "./pages/Prodactdetails/Prodactdetails";
import Cheakout from "./pages/Cheakout/Cheakout";
import Signin from "./pages/Signin/Signin";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<Prodactdetails />} />
        <Route path="cheakout" element={<Cheakout />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
