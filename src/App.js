import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './pages/about';
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
