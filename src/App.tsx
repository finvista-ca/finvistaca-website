import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ServiceDetail } from './pages/ServiceDetail';
import { Services } from './pages/Services';
import { OtherServices } from './pages/OtherServices';
import { Career } from './pages/Career';
import { NewsFeed } from './pages/NewsFeed';
import { CalculatorList } from './pages/CalculatorList';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { GstResources } from './pages/GstResources';
import { ResourcePage } from './pages/ResourcePage';
import { ComingSoon } from './components/shared/ComingSoon';
import { DataPolicy } from './pages/DataPolicy';
import { DueDates } from './pages/DueDates';
import { CallBackPopup } from './components/shared/CallBackPopup';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Helper component for pending pages
const PendingPage = ({ title }: { title: string }) => (
  <main style={{ paddingTop: '80px' }}>
    <ComingSoon pageName={title} />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/:slug" element={<ResourcePage />} />
          <Route path="/gst" element={<GstResources />} />
          <Route path="/gst/:slug" element={<ResourcePage />} />
          <Route path="/calculator" element={<CalculatorList />} />
          <Route path="/calculator/:slug" element={<ResourcePage />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          
          {/* Service detail routes for footer links and mega menu */}
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/data-policy" element={<DataPolicy />} />
          <Route path="/due-dates" element={<DueDates />} />
          <Route path="/privacy" element={<PendingPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PendingPage title="Terms of Service" />} />
        </Routes>
        <Footer />
        <CallBackPopup />
      </div>
    </Router>
  );
}

export default App;
