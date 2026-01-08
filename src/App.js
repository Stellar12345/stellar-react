import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Enquire from './pages/Enquire';
import Ecommerce from './pages/services/Ecommerce';
import WebDesign from './pages/services/WebDesign';
import MobileApp from './pages/services/MobileApp';
import CustomSoftware from './pages/services/CustomSoftware';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DesignServices from './pages/services/DesignServices';
import FieldEaze from './pages/products/FieldEaze';
import CaseStudies from './pages/blog/CaseStudies';
import './App.css';

import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="pt-20"><Home /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/design-services" element={<DesignServices />} />
          <Route path="/products/fieldeaze" element={<FieldEaze />} />
          <Route path="/blog/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;