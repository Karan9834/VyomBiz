import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Page Imports - Categorized Structure
import Home from "./pages/home/Home";
// import Home from "./pages/home/Home1";
import Startup from "./pages/startup/Startup";
import IPTrademark from "./pages/ip-trademark/IPTrademark";
import Compliance from "./pages/compliance/Compliance";
import Regulatory from "./pages/regulatory/Regulatory";
import Environmental from "./pages/environmental/Environmental";
import CompanyRegistration from "./pages/startup/CompanyRegistration";
import LLPRegistration from "./pages/startup/LLPRegistration";
import PublicLimitedRegistration from "./pages/startup/PublicLimitedRegistration";
import OPCRegistration from "./pages/startup/OPCRegistration";
import TrustRegistration from "./pages/startup/NGOTrust/TrustRegistration";
import SocietyRegistration from "./pages/startup/NGOTrust/SocietyRegistration";
import Section8Company from "./pages/startup/NGOTrust/Section8Company";
import EightyTwenty from "./pages/startup/NGOTrust/EightyTwenty";
import CSR1Registration from "./pages/startup/NGOTrust/CSR1Registration";
import DarpanRegistration from "./pages/startup/NGOTrust/DarpanRegistration";

import About from "./pages/company/About";
import Career from "./pages/company/Career";
import Contact from "./pages/company/Contact";
import Media from "./pages/company/Media";
import WorkAtVyomBiz from "./pages/company/WorkAtVyomBiz";
import Reviews from "./pages/company/Reviews";
import Partner from "./pages/company/Partner";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import Sitemap from "./pages/legal/Sitemap";

import Learning from "./pages/resources/Learning";
import Newsletter from "./pages/resources/Newsletter";
import Publications from "./pages/resources/Publications";

import NotFound from "./pages/error/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          {/* Main Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/llp-registration" element={<LLPRegistration />} />
          <Route path="/public-limited-registration" element={<PublicLimitedRegistration />} />
          <Route path="/one-person-company-registration" element={<OPCRegistration />} />
          <Route path="/trust-registration" element={<TrustRegistration />} />
          <Route path="/society-registration" element={<SocietyRegistration />} />
          <Route path="/section-8-company" element={<Section8Company />} />
          <Route path="/80g-12a-registration" element={<EightyTwenty />} />
          <Route path="/csr-1-registration" element={<CSR1Registration />} />
          <Route path="/darpan-registration" element={<DarpanRegistration />} />
          <Route path="/ip-trademark" element={<IPTrademark />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/regulatory" element={<Regulatory />} />
          <Route path="/environmental" element={<Environmental />} />

          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/work-at-vyombiz" element={<WorkAtVyomBiz />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/partner" element={<Partner />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Resources Routes */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/publications" element={<Publications />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
