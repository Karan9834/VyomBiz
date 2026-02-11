import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Page Imports - Categorized Structure
import Home from "./pages/home/Home";
// import Home from "./pages/home/Home1";
import Startup from "./pages/startup/Startup";
import IPTrademark from "./pages/ip-trademark/IPTrademark";
import TrademarkRegistration from "./pages/ip-trademark/Trademarks India/TrademarkRegistration";
import TrademarkWatchServices from "./pages/ip-trademark/TM Watch/TrademarkWatchServices";
import InternationalTrademarkRegistration from "./pages/ip-trademark/InternationalTM/InternationalTrademarkRegistration";
import DesignRegistration from "./pages/ip-trademark/Designs/DesignRegistration";
import RegistrationOFGeographicalIndication from "./pages/ip-trademark/GI/RegistrationOFGeographicalIndication";
import CopyrightRegistration from "./pages/ip-trademark/Copyright/CopyrightRegistration";
import PatentRegistration from "./pages/ip-trademark/Patent/PatentRegistration";
import PatentDueDiligence from "./pages/ip-trademark/Advisory/PatentDueDiligence";
import Compliance from "./pages/compliance/Compliance";
import Regulatory from "./pages/regulatory/Regulatory";
import Environmental from "./pages/environmental/Environmental";
import LawyersServices from "./pages/lawyers-services/LawyersServices";
import CompanyRegistration from "./pages/startup/CompanyRegistration";
import LLPRegistration from "./pages/startup/LLPRegistration";
import PublicLimitedRegistration from "./pages/startup/PublicLimitedRegistration";
import OPCRegistration from "./pages/startup/OPCRegistration";
import TrustRegistration from "./pages/startup/NGOTrust/TrustRegistration";
import SocietyRegistration from "./pages/startup/NGOTrust/SocietyRegistration";
import Section8Company from "./pages/startup/NGOTrust/Section8Company";
import EightyTwelve from "./pages/startup/NGOTrust/EightyTwelve";
import NGOCSR1Registration from "./pages/startup/NGOTrust/NGOCSR1Registration";
import NGODarpanRegistration from "./pages/startup/NGOTrust/NGODarpanRegistration";
import Registration80G from "./pages/startup/NGOTrust/80GRegistration";
import StrikeoffSection8Companies from "./pages/startup/NGOTrust/StrikeoffSection8Companies";
import TrustAnnualCompliance from "./pages/startup/NGOTrust/TrustAnnualCompliance";
import NGORegistration from "./pages/startup/NGOTrust/NGORegistration";
import FCRARegistration from "./pages/startup/NGOTrust/FCRARegistration";
import Registration12AA from "./pages/startup/NGOTrust/12AARegistration";
import Registration12AB from "./pages/startup/NGOTrust/12ABRegistration";
import NGOCSRCOnsultancy from "./pages/startup/NGOTrust/NGOCSRCOnsultancy";
import NGOIncomeTaxAdvisory from "./pages/startup/NGOTrust/NGOIncomeTaxAdvisory";
import NGOAccounting from "./pages/startup/NGOTrust/NGOAccounting";
import NGOProjectReport from "./pages/startup/NGOTrust/NGOProjectReport";

import CompanyRegistrationUSA from "./pages/startup/Global Incorporation/CompanyRegistrationUSA";
import CompanyRegistrationUK from "./pages/startup/Global Incorporation/CompanyRegistrationUK";
import CompanyRegistrationDubai from "./pages/startup/Global Incorporation/CompanyRegistrationDubai";
import CompanyRegistrationMauritius from "./pages/startup/Global Incorporation/CompanyRegistrationMauritius";
import CompanyRegistrationHongKong from "./pages/startup/Global Incorporation/CompanyRegistrationHongKong";
import CompanyRegistrationSingapore from "./pages/startup/Global Incorporation/CompanyRegistrationSingapore";
import CompanyRegistrationNewZeland from "./pages/startup/Global Incorporation/Company RegistrationNewZeland";
import CompanyRegistrationAustralia from "./pages/startup/Global Incorporation/CompanyRegistrationAustralia";
import CompanyRegistrationCanada from "./pages/startup/Global Incorporation/CompanyRegistrationCanada";
import CompanyRegistrationRussia from "./pages/startup/Global Incorporation/CompanyRegistrationRussia";
import CompanyRegistrationPoland from "./pages/startup/Global Incorporation/CompanyRegistrationPoland";
import CompanyRegistrationJapan from "./pages/startup/Global Incorporation/CompanyRegistrationJapan";
import CompanyRegistrationGermany from "./pages/startup/Global Incorporation/CompanyRegistrationGermany";
import CompanyRegistrationFrance from "./pages/startup/Global Incorporation/CompanyRegistrationFrance";
import CompanyRegistrationSouthAfrica from "./pages/startup/Global Incorporation/CompanyRegistrationSouthAfrica";
import PartnershipRegistration from "./pages/startup/PartnershipRegistration";
import SoleProprietorship from "./pages/startup/SoleProprietorship";
import NidhiCompanyRegistration from "./pages/startup/NidhiCompanyRegistration";
import ProducerCompanyRegistration from "./pages/startup/ProducerCompanyRegistration";
import IndianSubsidiaryRegistration from "./pages/startup/IndianSubsidiaryRegistration";
// Industry Setup Pages
import ClinicalEstablishment from "./pages/startup/IndustrySetup/ClinicalEstablishmentRegistration";
import CarbonBlackManufacturing from "./pages/startup/IndustrySetup/CarbonBlackManufacturing";
import GreenHydrogenPlant from "./pages/startup/IndustrySetup/GreenHydrogenPlant";
import GreenAmmoniaPlant from "./pages/startup/IndustrySetup/GreenAmmoniaPlant";
import SyntheticRubberBusiness from "./pages/startup/IndustrySetup/SyntheticRubberBusiness";
import PaperPackagingIndustry from "./pages/startup/IndustrySetup/PaperPackagingIndustry";
import FermentationIndustry from "./pages/startup/IndustrySetup/FermentationIndustry";
import RenewableEnergyBusiness from "./pages/startup/IndustrySetup/RenewableEnergyBusiness";
import FireEquipmentPlantSetup from "./pages/startup/IndustrySetup/FireEquipmentPlantSetup";
import VirtualOfficeSpace from "./pages/startup/IndustrySetup/VirtualOfficeSpace";

// FSSAI & Eating House Pages
import FssaiLicense from "./pages/startup/FssaiEating/FssaiLicense";
import FssaiRenewal from "./pages/startup/FssaiEating/FssaiRenewal";
import FssaiStateLicense from "./pages/startup/FssaiEating/FssaiStateLicense";
import EatingHouseLicense from "./pages/startup/FssaiEating/EatingHouseLicense";
import CentralFssaiLicense from "./pages/startup/FssaiEating/CentralFssaiLicense";
import FssaiAnnualReturn from "./pages/startup/FssaiEating/FssaiAnnualReturn";
import FssaiProductApproval from "./pages/startup/FssaiEating/FssaiProductApproval";
import FoodRecyclingLicense from "./pages/startup/FssaiEating/FoodRecyclingLicense";
import FPOMarkCertification from "./pages/startup/FssaiEating/FPOMarkCertification";

// ISO Certification Pages
import ISORegistration from "./pages/startup/ISO/ISORegistration";
import ISO37001Registration from "./pages/startup/ISO/ISO37001Registration";
import ISO14001Registration from "./pages/startup/ISO/ISO14001Registration";
import ISO27001Registration from "./pages/startup/ISO/ISO27001Registration";
import ISO22000Registration from "./pages/startup/ISO/ISO22000Registration";
import ISO9001Registration from "./pages/startup/ISO/ISO9001Registration";
import ISO50001Registration from "./pages/startup/ISO/ISO50001Registration";
import ISO45001Registration from "./pages/startup/ISO/ISO45001Registration";
import ISO20000Registration from "./pages/startup/ISO/ISO20000Registration";
import ISO31000Registration from "./pages/startup/ISO/ISO31000Registration";
import ISO13485Registration from "./pages/startup/ISO/ISO13485Registration";
import ISO21101Registration from "./pages/startup/ISO/ISO21101Registration";
import ISO16001Registration from "./pages/startup/ISO/ISO16001Registration";
import ISO39001Registration from "./pages/startup/ISO/ISO39001Registration";
import ISO2768Registration from "./pages/startup/ISO/ISO2768Registration";


import About from "./pages/company/About";
import Carrers from "./pages/Carrers";
import Contact from "./components/Contact/ContactUs";
import Media from "./pages/company/Media";
import WorkAtVyomBiz from "./components/Contact/WorkAtVyombiz";
import Reviews from "./pages/Reviews";
import Partner from "./pages/company/Partner";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import Sitemap from "./pages/legal/Sitemap";

import Learning from "./pages/resources/Learning";
import Newsletter from "./pages/resources/Newsletter";
import Publications from "./pages/resources/Publications";

import NotFound from "./pages/error/NotFound";

import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/80g-12a-registration" element={<EightyTwelve />} />
          <Route path="/csr-1-registration" element={<NGOCSR1Registration />} />
          <Route path="/darpan-registration" element={<NGODarpanRegistration />} />
          <Route path="/80g-registration" element={<Registration80G />} />
          <Route path="/strike-off-section-8-company" element={<StrikeoffSection8Companies />} />
          <Route path="/trust-annual-compliance" element={<TrustAnnualCompliance />} />
          <Route path="/ngo-registration" element={<NGORegistration />} />
          <Route path="/fcra-registration" element={<FCRARegistration />} />
          <Route path="/12aa-registration" element={<Registration12AA />} />
          <Route path="/12ab-registration" element={<Registration12AB />} />
          <Route path="/ngo-csr-consultancy" element={<NGOCSRCOnsultancy />} />
          <Route path="/ngo-income-tax-advisory" element={<NGOIncomeTaxAdvisory />} />
          <Route path="/ngo-accounting" element={<NGOAccounting />} />
          <Route path="/ngo-project-report" element={<NGOProjectReport />} />

          <Route path="/usa-incorporation" element={<CompanyRegistrationUSA />} />
          <Route path="/uk-incorporation" element={<CompanyRegistrationUK />} />
          <Route path="/dubai-company-setup" element={<CompanyRegistrationDubai />} />
          <Route path="/company-registration-mauritius" element={<CompanyRegistrationMauritius />} />
          <Route path="/hong-kong-incorporation" element={<CompanyRegistrationHongKong />} />
          <Route path="/singapore-incorporation" element={<CompanyRegistrationSingapore />} />
          <Route path="/new-zealand-incorporation" element={<CompanyRegistrationNewZeland />} />
          <Route path="/australia-incorporation" element={<CompanyRegistrationAustralia />} />
          <Route path="/canada-incorporation" element={<CompanyRegistrationCanada />} />
          <Route path="/russia-incorporation" element={<CompanyRegistrationRussia />} />
          <Route path="/poland-incorporation" element={<CompanyRegistrationPoland />} />
          <Route path="/japan-incorporation" element={<CompanyRegistrationJapan />} />
          <Route path="/germany-incorporation" element={<CompanyRegistrationGermany />} />
          <Route path="/france-incorporation" element={<CompanyRegistrationFrance />} />
          <Route path="/south-africa-incorporation" element={<CompanyRegistrationSouthAfrica />} />
          <Route path="/partnership-firm-registration" element={<PartnershipRegistration />} />
          <Route path="/sole-proprietorship-registration" element={<SoleProprietorship />} />
          <Route path="/nidhi-company-registration" element={<NidhiCompanyRegistration />} />
          <Route path="/producer-company-registration" element={<ProducerCompanyRegistration />} />
          <Route path="/indian-subsidiary-company-registration" element={<IndianSubsidiaryRegistration />} />
          <Route path="/ip-trademark" element={<IPTrademark />} />
          <Route path="/lawyers-services" element={<LawyersServices />} />

          {/* IP & Trademark Routes */}
          <Route path="/trademark-registration" element={<TrademarkRegistration />} />
          <Route path="/trademark-watch-services" element={<TrademarkWatchServices />} />
          <Route path="/international-trademark-registration" element={<InternationalTrademarkRegistration />} />
          <Route path="/design-registration" element={<DesignRegistration />} />
          <Route path="/gi-registration" element={<RegistrationOFGeographicalIndication />} />
          <Route path="/copyright-registration" element={<CopyrightRegistration />} />
          <Route path="/patent-registration" element={<PatentRegistration />} />
          <Route path="/patent-due-diligence" element={<PatentDueDiligence />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/regulatory" element={<Regulatory />} />
          <Route path="/environmental" element={<Environmental />} />
          <Route path="/clinical-establishment-registration" element={<ClinicalEstablishment />} />
          <Route path="/carbon-black-manufacturing-business-setup" element={<CarbonBlackManufacturing />} />
          <Route path="/green-hydrogen-plant-setup" element={<GreenHydrogenPlant />} />
          <Route path="/green-ammonia-plant-setup" element={<GreenAmmoniaPlant />} />
          <Route path="/synthetic-rubber-business-setup" element={<SyntheticRubberBusiness />} />
          <Route path="/paper-and-paperboard-packaging-industry" element={<PaperPackagingIndustry />} />
          <Route path="/fermentation-industry-setup" element={<FermentationIndustry />} />
          <Route path="/renewable-energy-business-setup" element={<RenewableEnergyBusiness />} />
          <Route path="/fire-equipment-plant-setup" element={<FireEquipmentPlantSetup />} />
          <Route path="/virtual-office-space-setup" element={<VirtualOfficeSpace />} />

          {/* FSSAI & Eating House Routes */}
          <Route path="/fssai-license" element={<FssaiLicense />} />
          <Route path="/fssai-license-renewal" element={<FssaiRenewal />} />
          <Route path="/fssai-state-license" element={<FssaiStateLicense />} />
          <Route path="/eating-house-license" element={<EatingHouseLicense />} />
          <Route path="/central-fssai-license" element={<CentralFssaiLicense />} />
          <Route path="/fssai-annual-return" element={<FssaiAnnualReturn />} />
          <Route path="/fssai-product-approval" element={<FssaiProductApproval />} />
          <Route path="/food-recycling-license" element={<FoodRecyclingLicense />} />
          <Route path="/fpo-mark-certification" element={<FPOMarkCertification />} />

          {/* ISO Certification Routes */}
          <Route path="/iso-registration" element={<ISORegistration />} />
          <Route path="/iso-37001-2016-certification" element={<ISO37001Registration />} />
          <Route path="/iso-14001-ems" element={<ISO14001Registration />} />
          <Route path="/iso-27001-isms" element={<ISO27001Registration />} />
          <Route path="/iso-22000-fsms" element={<ISO22000Registration />} />
          <Route path="/iso-9001-2015" element={<ISO9001Registration />} />
          <Route path="/iso-50001-energy-management" element={<ISO50001Registration />} />
          <Route path="/iso-45001-certification" element={<ISO45001Registration />} />
          <Route path="/iso-20000-certification" element={<ISO20000Registration />} />
          <Route path="/iso-31000-certification" element={<ISO31000Registration />} />
          <Route path="/iso-13485-certification" element={<ISO13485Registration />} />
          <Route path="/iso-21101-2014-certification" element={<ISO21101Registration />} />
          <Route path="/iso-16001-certification" element={<ISO16001Registration />} />
          <Route path="/iso-39001-certification" element={<ISO39001Registration />} />
          <Route path="/iso-2768-1-certification" element={<ISO2768Registration />} />

          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Carrers />} />
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
