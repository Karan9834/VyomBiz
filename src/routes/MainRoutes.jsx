import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/company/About'));
const Media = lazy(() => import('../pages/company/Media'));
const Partner = lazy(() => import('../pages/company/Partner'));
const Carrers = lazy(() => import('../pages/Carrers'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Contact = lazy(() => import('../pages/company/Contact'));
const WorkAtVyomBiz = lazy(() => import('../components/Contact/WorkAtVyombiz'));

const Learning = lazy(() => import('../pages/resources/Learning'));
const Newsletter = lazy(() => import('../pages/resources/Newsletter'));
const Publications = lazy(() => import('../pages/resources/Publications'));

const Regulatory = lazy(() => import('../pages/regulatory/Regulatory'));
const Environmental = lazy(() => import('../pages/environmental/Environmental'));
const NotFound = lazy(() => import('../pages/error/NotFound'));
const BusinessRegistration = lazy(() => import('../pages/footer/BusinessRegistration'));

// Environmental Pages
const BatteryWasteManagement = lazy(() => import('../pages/footer/Environmental/BatteryWasteManagement'));
const EnvironmentalBusinessRegistration = lazy(() => import('../pages/footer/Environmental/BusinessRegistration'));
const EIA = lazy(() => import('../pages/footer/Environmental/EIA'));
const EWasteManagement = lazy(() => import('../pages/footer/Environmental/EWasteManagement'));
const EnvironmentalAdvisory = lazy(() => import('../pages/footer/Environmental/EnvironmentalAdvisory'));
const EnvironmentalIndustry = lazy(() => import('../pages/footer/Environmental/EnvironmentalIndustry'));
const EnvironmentalLicensing = lazy(() => import('../pages/footer/Environmental/EnvironmentalLicensing'));
const HazardousWasteManagement = lazy(() => import('../pages/footer/Environmental/HazardousWasteManagement'));
const PlasticWasteManagement = lazy(() => import('../pages/footer/Environmental/PlasticWasteManagement'));
const PollutionNOC = lazy(() => import('../pages/footer/Environmental/PollutionNOC'));

// NGO & Other Pages from origin/main
const NGOTrust = lazy(() => import('../pages/footer/NGOTrusT'));
const GlobalIncorporation = lazy(() => import('../pages/footer/GlobalIncorporation'));
const IndustrySetup = lazy(() => import('../pages/footer/IndustrySetup'));
const GovernmentLicenses = lazy(() => import('../pages/footer/GovernmentLicenses'));
const GovernmentRegistration = lazy(() => import('../pages/footer/GovernmentRegistration'));
const ISOCertifications = lazy(() => import('../pages/footer/ISOCertifications'));
const FssaiEatingLicense = lazy(() => import('../pages/footer/Fssai&EatingLicense'));

import SecretarialCompliance from '../pages/footer/compliance/SecretarialCompliance';
import TaxFilingCompliance from '../pages/footer/compliance/TaxFilingCompliance';
import AccountingCFO from '../pages/footer/compliance/AccountingCFO';
import ContractsAgreements from '../pages/footer/compliance/ContractsAgreements';
import LegalServices from '../pages/footer/compliance/LegalServices';
import ConvertYourBusiness from '../pages/footer/compliance/ConvertYourBusiness';

const MainRoutes = [
    <Route key="home" path="/" element={<Home />} />,
    <Route key="business-registration" path="/business-registration" element={<BusinessRegistration />} />,
    <Route key="compliance" path="/tax-filling-compliance" element={<TaxFilingCompliance />} />,
    <Route key="compliance" path="/secretarial-compliance" element={<SecretarialCompliance />} />,
    <Route key="compliance" path="/accounting-cfo" element={<AccountingCFO />} />,
    <Route key="compliance" path="/contracts-agreements" element={<ContractsAgreements />} />,
    <Route key="compliance" path="/legal-services" element={<LegalServices />} />,
    <Route key="compliance" path="/convert-your-business" element={<ConvertYourBusiness />} />,

    // NGO & Other Routes
    <Route key="ngo" path="/ngo" element={<NGOTrust />} />,
    <Route key="global-incorporation" path="/global-incorporation" element={<GlobalIncorporation />} />,
    <Route key="industry-setup" path="/industry-setup" element={<IndustrySetup />} />,
    <Route key="government-licenses" path="/government-licenses" element={<GovernmentLicenses />} />,
    <Route key="government-registration" path="/government-registration" element={<GovernmentRegistration />} />,
    <Route key="iso-certifications" path="/iso-certifications" element={<ISOCertifications />} />,
    <Route key="fssai-eating-license" path="/fssai-eating-license" element={<FssaiEatingLicense />} />,

    <Route key="about" path="/about" element={<About />} />,
    <Route key="career" path="/career" element={<Carrers />} />,
    <Route key="contact" path="/contact" element={<Contact />} />,
    <Route key="media" path="/media" element={<Media />} />,
    <Route key="work" path="/work-at-vyombiz" element={<WorkAtVyomBiz />} />,
    <Route key="reviews" path="/reviews" element={<Reviews />} />,
    <Route key="partner" path="/partner" element={<Partner />} />,

    <Route key="learning" path="/learning" element={<Learning />} />,
    <Route key="newsletter" path="/newsletter" element={<Newsletter />} />,
    <Route key="publications" path="/publications" element={<Publications />} />,

    <Route key="regu" path="/regulatory" element={<Regulatory />} />,
    <Route key="env" path="/environmental" element={<Environmental />} />,

    // Environmental Routes
    <Route key="battery-waste-management" path="/battery-waste-management" element={<BatteryWasteManagement />} />,
    <Route key="env-business-registration" path="/environmental/business-registration" element={<EnvironmentalBusinessRegistration />} />,
    <Route key="eia" path="/eia" element={<EIA />} />,
    <Route key="e-waste-management" path="/e-waste-management" element={<EWasteManagement />} />,
    <Route key="environmental-advisory" path="/environmental-advisory" element={<EnvironmentalAdvisory />} />,
    <Route key="environmental-industry" path="/environmental-industry" element={<EnvironmentalIndustry />} />,
    <Route key="environmental-licensing" path="/environmental-licensing" element={<EnvironmentalLicensing />} />,
    <Route key="hazardous-waste-management" path="/hazardous-waste-management" element={<HazardousWasteManagement />} />,
    <Route key="plastic-waste-management" path="/plastic-waste-management" element={<PlasticWasteManagement />} />,
    <Route key="pollution-noc" path="/pollution-noc" element={<PollutionNOC />} />,

    <Route key="not-found" path="*" element={<NotFound />} />,
];

export default MainRoutes;
