import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const LawyersServices = lazy(() => import('../pages/lawyers-services/LawyersServices'));
const LawyerSpecializationDynamic = lazy(() => import('../pages/lawyers-services/LawyerSpecializationDynamic'));

// Litigation
const DefamationComplaint = lazy(() => import('../pages/lawyers-services/litigation/DefamationComplaint'));
const EmploymentDisputeLitigation = lazy(() => import('../pages/lawyers-services/litigation/EmploymentDisputeLitigation'));
const ChequeBounceComplaint = lazy(() => import('../pages/lawyers-services/litigation/ChequeBounceComplaint'));
const CyberCrimeLitigation = lazy(() => import('../pages/lawyers-services/litigation/CyberCrimeLitigation'));
const ContestedDivorce = lazy(() => import('../pages/lawyers-services/litigation/ContestedDivorce'));
const POSHCompliance = lazy(() => import('../pages/lawyers-services/litigation/POSHCompliance'));
const USLitigationService = lazy(() => import('../pages/lawyers-services/litigation/USLitigationService'));
const IntellectualPropertyInfringement = lazy(() => import('../pages/lawyers-services/litigation/IntellectualPropertyInfringement'));
const ContractDisputeLitigation = lazy(() => import('../pages/lawyers-services/litigation/ContractDisputeLitigation'));
const PropertyLitigation = lazy(() => import('../pages/lawyers-services/litigation/PropertyLitigation'));
const MutualDivorceLitigation = lazy(() => import('../pages/lawyers-services/litigation/MutualDivorceLitigation'));
const RestitutionOfConjugalRights = lazy(() => import('../pages/lawyers-services/litigation/RestitutionOfConjugalRights'));
const RERAComplaintLitigation = lazy(() => import('../pages/lawyers-services/litigation/RERAComplaintLitigation'));

// Legal Services (from compliance folder)
const SuccessionCertificateinIndia = lazy(() => import('../pages/compliance/Legal Services/SuccessionCertificateinIndia'));
const Section8DemandNotice = lazy(() => import('../pages/compliance/Legal Services/Section8DemandNotice'));
const RERAComplaint = lazy(() => import('../pages/compliance/Legal Services/RERAComplaint'));
const PublicInterestLitigation = lazy(() => import('../pages/compliance/Legal Services/PublicInterestLitigation'));
const LegalNotice = lazy(() => import('../pages/compliance/Legal Services/LegalNotice'));
const LegalHeirCertificate = lazy(() => import('../pages/compliance/Legal Services/LegalHeirCertificate'));
const LeaseAgreementDrafting = lazy(() => import('../pages/compliance/Legal Services/LeaseAgreementDrafting'));
const ConsumerComplaint = lazy(() => import('../pages/compliance/Legal Services/ConsumerComplaint'));
const Automobile = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Automobile'));
const CourierLogistics = lazy(() => import('../pages/lawyers-services/Consumer Complaint/CourierLogistics'));
const Bank = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Bank'));
const Ecommerce = lazy(() => import('../pages/lawyers-services/Consumer Complaint/E-commerce'));
const Education = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Education'));
const Travel = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Travel'));
const StreamingPlatforms = lazy(() => import('../pages/lawyers-services/Consumer Complaint/StreamingPlatforms'));
const RetailBusiness = lazy(() => import('../pages/lawyers-services/Consumer Complaint/RetailBusiness'));
const RealEstate = lazy(() => import('../pages/lawyers-services/Consumer Complaint/RealEstate'));
const Medical = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Medical'));
const ITCompanies = lazy(() => import('../pages/lawyers-services/Consumer Complaint/ITCompanies'));
const Grievances = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Grievances'));
const Insurance = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Insurance'));
const HomeAppliances = lazy(() => import('../pages/lawyers-services/Consumer Complaint/HomeAppliances'));
const Hotels = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Hotels'));
const Investment = lazy(() => import('../pages/lawyers-services/Consumer Complaint/Investment'));

const ChequeBounceNotice = lazy(() => import('../pages/compliance/Legal Services/ChequeBounceNotice'));
const CaveatPetition = lazy(() => import('../pages/compliance/Legal Services/CaveatPetition'));

// Policies
const PrivacyPolicy = lazy(() => import('../pages/legal/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('../pages/legal/RefundPolicy'));
const TermsConditions = lazy(() => import('../pages/legal/TermsConditions'));
const Sitemap = lazy(() => import('../pages/legal/Sitemap'));

const LegalRoutes = [
    <Route key="law-srv" path="/lawyers-services" element={<LawyersServices />} />,
    <Route key="law-spec" path="/lawyers-services/:type" element={<LawyerSpecializationDynamic />} />,

    // Litigation
    <Route key="def-comp" path="/defamation-complaint" element={<DefamationComplaint />} />,
    <Route key="emp-disp" path="/employment-dispute-litigation" element={<EmploymentDisputeLitigation />} />,
    <Route key="chq-bnc-comp" path="/cheque-bounce-complaint" element={<ChequeBounceComplaint />} />,
    <Route key="cyb-crm" path="/cyber-crime-litigation" element={<CyberCrimeLitigation />} />,
    <Route key="cont-div" path="/contested-divorce" element={<ContestedDivorce />} />,
    <Route key="posh" path="/posh-compliance" element={<POSHCompliance />} />,
    <Route key="us-lit" path="/us-litigation-service" element={<USLitigationService />} />,
    <Route key="ip-inf" path="/intellectual-property-infringement" element={<IntellectualPropertyInfringement />} />,
    <Route key="con-disp" path="/contract-dispute-litigation" element={<ContractDisputeLitigation />} />,
    <Route key="prop-lit" path="/property-litigation" element={<PropertyLitigation />} />,
    <Route key="mut-div" path="/mutual-divorce" element={<MutualDivorceLitigation />} />,
    <Route key="rest-conj" path="/restitution-of-conjugal-rights" element={<RestitutionOfConjugalRights />} />,
    <Route key="rera-lit" path="/rera-complaint" element={<RERAComplaintLitigation />} />,

    // Legal Services
    <Route key="succ-cert" path="/succession-certificate-in-india" element={<SuccessionCertificateinIndia />} />,
    <Route key="sec8-dmnd" path="/section-8-demand-notice" element={<Section8DemandNotice />} />,
    <Route key="pub-lit" path="/public-interest-litigation" element={<PublicInterestLitigation />} />,
    <Route key="leg-not" path="/legal-notice" element={<LegalNotice />} />,
    <Route key="leg-heir" path="/legal-heir-certificate" element={<LegalHeirCertificate />} />,
    <Route key="leas-agr" path="/lease-agreement-drafting" element={<LeaseAgreementDrafting />} />,
    <Route key="cons-comp" path="/consumer-complaint" element={<ConsumerComplaint />} />,
    <Route key="cons-auto" path="/consumer-complaint/automobile" element={<Automobile />} />,
    <Route key="cons-courier" path="/consumer-complaint/courier-logistics" element={<CourierLogistics />} />,
    <Route key="cons-bank" path="/consumer-complaint/bank" element={<Bank />} />,
    <Route key="cons-ecom" path="/consumer-complaint/ecommerce" element={<Ecommerce />} />,
    <Route key="cons-edu" path="/consumer-complaint/education" element={<Education />} />,
    <Route key="cons-griev" path="/consumer-complaint/grievances" element={<Grievances />} />,
    <Route key="cons-travel" path="/consumer-complaint/travel" element={<Travel />} />,
    <Route key="cons-stream" path="/consumer-complaint/streaming-platforms" element={<StreamingPlatforms />} />,
    <Route key="cons-retail" path="/consumer-complaint/retail-business" element={<RetailBusiness />} />,
    <Route key="cons-real" path="/consumer-complaint/real-estate" element={<RealEstate />} />,
    <Route key="cons-med" path="/consumer-complaint/medical" element={<Medical />} />,
    <Route key="cons-it" path="/consumer-complaint/it-companies" element={<ITCompanies />} />,
    <Route key="cons-ins" path="/consumer-complaint/insurance" element={<Insurance />} />,
    <Route key="cons-home" path="/consumer-complaint/home-appliances" element={<HomeAppliances />} />,
    <Route key="cons-hotel" path="/consumer-complaint/hotels" element={<Hotels />} />,
    <Route key="cons-inv" path="/consumer-complaint/investment" element={<Investment />} />,
    <Route key="chq-bnc-not" path="/cheque-bounce-notice" element={<ChequeBounceNotice />} />,
    <Route key="cav-pet" path="/caveat-petition" element={<CaveatPetition />} />,

    // Policies
    <Route key="priv-pol" path="/privacy-policy" element={<PrivacyPolicy />} />,
    <Route key="ref-pol" path="/refund-policy" element={<RefundPolicy />} />,
    <Route key="term-cond" path="/terms-conditions" element={<TermsConditions />} />,
    <Route key="sitemap" path="/sitemap" element={<Sitemap />} />,
];

export default LegalRoutes;
