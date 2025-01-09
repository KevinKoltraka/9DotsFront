import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Terms from './CompanyPages/Terms/Terms';
import Disclaimer from './CompanyPages/Terms/Disclaimer/Disclaimer';
import Privacy from './CompanyPages/Terms/Privacy/Privacy';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Portfolio from './Pages/Portfolio/portfolio';
import Marketing from './Pages/Marketing/Marketing';
import Recruiting from './Pages/Recruiting/Recruiting';
import Blogs from './Pages/Blogs/blogs';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/terms" element={<Terms />}/>
          <Route path="/disclaimer" element={< Disclaimer />}/>
          <Route path="/privacy-policy" element={< Privacy />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
