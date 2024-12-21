import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Pastikan Footer diimpor dengan benar

import './index.css';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer /> {/* Pastikan Footer ditambahkan di sini */}
    </Router>
  );
}

export default App;
