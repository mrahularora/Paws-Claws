import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about";

import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
