import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
