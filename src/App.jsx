import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';
import About from './pages/About-me/about-me';
import Footer from './components/Footer/footer';
import './index.css';
// later you can add more pages: About, Skills, etc.

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* You can add About, Skills, Projects, Contact pages here later */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
