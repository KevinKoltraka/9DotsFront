import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
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
import JobList from './Pages/Recruiting/JobList';
import Blogs from './Pages/Blogs/blogs';
import DigitalMarketing from './Pages/Marketing/DigitalMarketing';
import Seo from './Pages/Marketing/Seo';
import PPC from './Pages/Marketing/PPC';
import SocialMediaMarketing from './Pages/Marketing/SocialMediaMarketing';
import SocialMediaAdvertising from './Pages/Marketing/SocialMediaAdvertising';
import LinkBuilding from './Pages/Marketing/LinkBuilding';
import WebDesign from './Pages/Marketing/WebDesign';
import MediaProduction from './Pages/Marketing/MediaProduction';
import ContentMarketing from './Pages/Marketing/ContentMarketing';
import ReputationManagement from './Pages/Marketing/ReputationManagement';
import EcommerceMarketing from "./Pages/Marketing/EcommerceMarketing";
import OnlineMarketplaceMarketing from "./Pages/Marketing/OnlineMarketplaceMarketing.js"; 
import ExecutiveSearch from "./Pages/Recruiting/ExecutiveSearch.js"; 
import RecruitmentSupport from "./Pages/Recruiting/RecruitmentSupport";
import Sourcing from "./Pages/Recruiting/Sourcing";
import CandidatesEvaluation from "./Pages/Recruiting/CandidatesEvaluation";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/Marketing/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/Marketing/seo" element={<Seo />} />
          <Route path="/Marketing/ppc-marketing" element={<PPC />} />
          <Route path="/Marketing/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/Marketing/social-media-advertising" element={<SocialMediaAdvertising />} />
          <Route path="/Marketing/link-building" element={<LinkBuilding />} />
          <Route path="/Marketing/web-design" element={<WebDesign />} />
          <Route path="/Marketing/media-production" element={<MediaProduction />} />
          <Route path="/Marketing/content-marketing" element={<ContentMarketing />} />
          <Route path="/Marketing/reputation-management" element={<ReputationManagement />} />
          <Route path="/marketing/e-commerce-marketing" element={<EcommerceMarketing />} />
          <Route path="/marketing/online-marketplace-marketing" element={<OnlineMarketplaceMarketing />} />
          <Route path="/recruiting/executive-search" element={<ExecutiveSearch />} />
          <Route path="/recruiting/recruitment-support" element={<RecruitmentSupport />} />
          <Route path="/recruiting/sourcing" element={<Sourcing />} />
          <Route path="/recruiting/candidates-evaluation" element={<CandidatesEvaluation />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={< Disclaimer />} />
          <Route path="/privacy-policy" element={< Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
