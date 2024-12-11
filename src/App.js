import "./App.css";
import './index.css';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1, }}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
