import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// Lazy imports for Startup pages
const Startup = lazy(() => import('../pages/startup/Startup'));
const CompanyRegistration = lazy(() => import('../pages/startup/CompanyRegistration'));
const LLPRegistration = lazy(() => import('../pages/startup/LLPRegistration'));
const PublicLimitedRegistration = lazy(() => import('../pages/startup/PublicLimitedRegistration'));
const OPCRegistration = lazy(() => import('../pages/startup/OPCRegistration'));
const TrustRegistration = lazy(() => import('../pages/startup/NGOTrust/TrustRegistration'));
const SocietyRegistration = lazy(() => import('../pages/startup/NGOTrust/SocietyRegistration'));
const Section8Company = lazy(() => import('../pages/startup/NGOTrust/Section8Company'));
const EightyTwelve = lazy(() => import('../pages/startup/NGOTrust/EightyTwelve'));
const NGOCSR1Registration = lazy(() => import('../pages/startup/NGOTrust/NGOCSR1Registration'));
const NGODarpanRegistration = lazy(() => import('../pages/startup/NGOTrust/NGODarpanRegistration'));
const Registration80G = lazy(() => import('../pages/startup/NGOTrust/80GRegistration'));
const StrikeoffSection8Companies = lazy(() => import('../pages/startup/NGOTrust/StrikeoffSection8Companies'));
const TrustAnnualCompliance = lazy(() => import('../pages/startup/NGOTrust/TrustAnnualCompliance'));
const NGORegistration = lazy(() => import('../pages/startup/NGOTrust/NGORegistration'));
const FCRARegistration = lazy(() => import('../pages/startup/NGOTrust/FCRARegistration'));
const Registration12AA = lazy(() => import('../pages/startup/NGOTrust/12AARegistration'));
const Registration12AB = lazy(() => import('../pages/startup/NGOTrust/12ABRegistration'));
const NGOCSRCOnsultancy = lazy(() => import('../pages/startup/NGOTrust/NGOCSRCOnsultancy'));
const NGOIncomeTaxAdvisory = lazy(() => import('../pages/startup/NGOTrust/NGOIncomeTaxAdvisory'));
const NGOAccounting = lazy(() => import('../pages/startup/NGOTrust/NGOAccounting'));
const NGOProjectReport = lazy(() => import('../pages/startup/NGOTrust/NGOProjectReport'));

// Global Incorporation
const CompanyRegistrationUSA = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationUSA'));
const CompanyRegistrationUK = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationUK'));
const CompanyRegistrationDubai = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationDubai'));
const CompanyRegistrationMauritius = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationMauritius'));
const CompanyRegistrationHongKong = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationHongKong'));
const CompanyRegistrationSingapore = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationSingapore'));
const CompanyRegistrationNewZeland = lazy(() => import('../pages/startup/Global Incorporation/Company RegistrationNewZeland'));
const CompanyRegistrationAustralia = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationAustralia'));
const CompanyRegistrationCanada = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationCanada'));
const CompanyRegistrationRussia = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationRussia'));
const CompanyRegistrationPoland = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationPoland'));
const CompanyRegistrationJapan = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationJapan'));
const CompanyRegistrationGermany = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationGermany'));
const CompanyRegistrationFrance = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationFrance'));
const CompanyRegistrationSouthAfrica = lazy(() => import('../pages/startup/Global Incorporation/CompanyRegistrationSouthAfrica'));

const PartnershipRegistration = lazy(() => import('../pages/startup/PartnershipRegistration'));
const SoleProprietorship = lazy(() => import('../pages/startup/SoleProprietorship'));
const NidhiCompanyRegistration = lazy(() => import('../pages/startup/NidhiCompanyRegistration'));
const ProducerCompanyRegistration = lazy(() => import('../pages/startup/ProducerCompanyRegistration'));
const IndianSubsidiaryRegistration = lazy(() => import('../pages/startup/IndianSubsidiaryRegistration'));

// Industry Setup
const ClinicalEstablishment = lazy(() => import('../pages/startup/IndustrySetup/ClinicalEstablishmentRegistration'));
const CarbonBlackManufacturing = lazy(() => import('../pages/startup/IndustrySetup/CarbonBlackManufacturing'));
const GreenHydrogenPlant = lazy(() => import('../pages/startup/IndustrySetup/GreenHydrogenPlant'));
const GreenAmmoniaPlant = lazy(() => import('../pages/startup/IndustrySetup/GreenAmmoniaPlant'));
const SyntheticRubberBusiness = lazy(() => import('../pages/startup/IndustrySetup/SyntheticRubberBusiness'));
const PaperPackagingIndustry = lazy(() => import('../pages/startup/IndustrySetup/PaperPackagingIndustry'));
const FermentationIndustry = lazy(() => import('../pages/startup/IndustrySetup/FermentationIndustry'));
const RenewableEnergyBusiness = lazy(() => import('../pages/startup/IndustrySetup/RenewableEnergyBusiness'));
const FireEquipmentPlantSetup = lazy(() => import('../pages/startup/IndustrySetup/FireEquipmentPlantSetup'));
const VirtualOfficeSpace = lazy(() => import('../pages/startup/IndustrySetup/VirtualOfficeSpace'));

// Government Licenses
const ShopAndEstablishmentLicense = lazy(() => import('../pages/startup/Government Licenses/Shop&EstablishmentLicense'));
const CECertification = lazy(() => import('../pages/startup/Government Licenses/CECertification'));
const PSARALicense = lazy(() => import('../pages/startup/Government Licenses/PSARALicense'));
const TradeLicense = lazy(() => import('../pages/startup/Government Licenses/TradeLicense'));
const MusicLicense = lazy(() => import('../pages/startup/Government Licenses/MusicLicense'));
const HealthTradeLicense = lazy(() => import('../pages/startup/Government Licenses/HealthTradeLicense'));

// Government Registration
const MSMERegistration = lazy(() => import('../pages/startup/Government Registration/MSMERegistration'));
const IECRegistration = lazy(() => import('../pages/startup/Government Registration/IECRegistration'));
const EPFRegistration = lazy(() => import('../pages/startup/Government Registration/EPFRegistration'));
const RERARaegistration = lazy(() => import('../pages/startup/Government Registration/RERARaegistration'));
const NSICRegistration = lazy(() => import('../pages/startup/Government Registration/NSICRegistration'));
const ESIRegistration = lazy(() => import('../pages/startup/Government Registration/ESIRegistration'));

// ISO Registration
const ISORegistration = lazy(() => import('../pages/startup/ISO/ISORegistration'));
const ISO50001Registration = lazy(() => import('../pages/startup/ISO/ISO50001Registration'));
const ISO45001Registration = lazy(() => import('../pages/startup/ISO/ISO45001Registration'));
const ISO39001Registration = lazy(() => import('../pages/startup/ISO/ISO39001Registration'));
const ISO14001 = lazy(() => import('../pages/startup/ISO/ISO14001'));
const ISO370012016 = lazy(() => import('../pages/startup/ISO/ISO370012016'));
const ISO22000 = lazy(() => import('../pages/startup/ISO/ISO22000'));

const StartupRoutes = [
    <Route key="startup" path="/startup" element={<Startup />} />,
    <Route key="comp-reg" path="/company-registration" element={<CompanyRegistration />} />,
    <Route key="llp-reg" path="/llp-registration" element={<LLPRegistration />} />,
    <Route key="pub-ltd" path="/public-limited-registration" element={<PublicLimitedRegistration />} />,
    <Route key="opc-reg" path="/one-person-company-registration" element={<OPCRegistration />} />,
    <Route key="trust-reg" path="/trust-registration" element={<TrustRegistration />} />,
    <Route key="soc-reg" path="/society-registration" element={<SocietyRegistration />} />,
    <Route key="sec-8" path="/section-8-company" element={<Section8Company />} />,
    <Route key="80g-12a" path="/80g-12a-registration" element={<EightyTwelve />} />,
    <Route key="csr-1" path="/csr-1-registration" element={<NGOCSR1Registration />} />,
    <Route key="darpan" path="/darpan-registration" element={<NGODarpanRegistration />} />,
    <Route key="80g" path="/80g-registration" element={<Registration80G />} />,
    <Route key="strike-off-sec8" path="/strike-off-section-8-company" element={<StrikeoffSection8Companies />} />,
    <Route key="trust-ann-comp" path="/trust-annual-compliance" element={<TrustAnnualCompliance />} />,
    <Route key="ngo-reg" path="/ngo-registration" element={<NGORegistration />} />,
    <Route key="fcra-reg" path="/fcra-registration" element={<FCRARegistration />} />,
    <Route key="12aa-reg" path="/12aa-registration" element={<Registration12AA />} />,
    <Route key="12ab-reg" path="/12ab-registration" element={<Registration12AB />} />,
    <Route key="ngo-csr-cons" path="/ngo-csr-consultancy" element={<NGOCSRCOnsultancy />} />,
    <Route key="ngo-it-adv" path="/ngo-income-tax-advisory" element={<NGOIncomeTaxAdvisory />} />,
    <Route key="ngo-acc" path="/ngo-accounting" element={<NGOAccounting />} />,
    <Route key="ngo-proj" path="/ngo-project-report" element={<NGOProjectReport />} />,

    // Global Incorporation
    <Route key="usa-inc" path="/usa-incorporation" element={<CompanyRegistrationUSA />} />,
    <Route key="uk-inc" path="/uk-incorporation" element={<CompanyRegistrationUK />} />,
    <Route key="dubai-inc" path="/dubai-company-setup" element={<CompanyRegistrationDubai />} />,
    <Route key="mau-inc" path="/company-registration-mauritius" element={<CompanyRegistrationMauritius />} />,
    <Route key="hk-inc" path="/hong-kong-incorporation" element={<CompanyRegistrationHongKong />} />,
    <Route key="sing-inc" path="/singapore-incorporation" element={<CompanyRegistrationSingapore />} />,
    <Route key="nz-inc" path="/new-zealand-incorporation" element={<CompanyRegistrationNewZeland />} />,
    <Route key="aus-inc" path="/australia-incorporation" element={<CompanyRegistrationAustralia />} />,
    <Route key="can-inc" path="/canada-incorporation" element={<CompanyRegistrationCanada />} />,
    <Route key="rus-inc" path="/russia-incorporation" element={<CompanyRegistrationRussia />} />,
    <Route key="pol-inc" path="/poland-incorporation" element={<CompanyRegistrationPoland />} />,
    <Route key="jap-inc" path="/japan-incorporation" element={<CompanyRegistrationJapan />} />,
    <Route key="ger-inc" path="/germany-incorporation" element={<CompanyRegistrationGermany />} />,
    <Route key="fra-inc" path="/france-incorporation" element={<CompanyRegistrationFrance />} />,
    <Route key="sa-inc" path="/south-africa-incorporation" element={<CompanyRegistrationSouthAfrica />} />,

    <Route key="part-reg" path="/partnership-firm-registration" element={<PartnershipRegistration />} />,
    <Route key="sole-reg" path="/sole-proprietorship-registration" element={<SoleProprietorship />} />,
    <Route key="nidhi-reg" path="/nidhi-company-registration" element={<NidhiCompanyRegistration />} />,
    <Route key="prod-reg" path="/producer-company-registration" element={<ProducerCompanyRegistration />} />,
    <Route key="ind-sub-reg" path="/indian-subsidiary-company-registration" element={<IndianSubsidiaryRegistration />} />,

    // Industry Setup
    <Route key="clin-est" path="/clinical-establishment-registration" element={<ClinicalEstablishment />} />,
    <Route key="carb-black" path="/carbon-black-manufacturing-business-setup" element={<CarbonBlackManufacturing />} />,
    <Route key="green-hyd" path="/green-hydrogen-plant-setup" element={<GreenHydrogenPlant />} />,
    <Route key="green-amm" path="/green-ammonia-plant-setup" element={<GreenAmmoniaPlant />} />,
    <Route key="syn-rub" path="/synthetic-rubber-business-setup" element={<SyntheticRubberBusiness />} />,
    <Route key="paper-pack" path="/paper-and-paperboard-packaging-industry" element={<PaperPackagingIndustry />} />,
    <Route key="ferm-ind" path="/fermentation-industry-setup" element={<FermentationIndustry />} />,
    <Route key="renew-en" path="/renewable-energy-business-setup" element={<RenewableEnergyBusiness />} />,
    <Route key="fire-eq" path="/fire-equipment-plant-setup" element={<FireEquipmentPlantSetup />} />,
    <Route key="virt-off" path="/virtual-office-space-setup" element={<VirtualOfficeSpace />} />,

    // Government Licenses
    <Route key="shop-est-lic" path="/shop-establishment-license" element={<ShopAndEstablishmentLicense />} />,
    <Route key="ce-cert" path="/ce-certification" element={<CECertification />} />,
    <Route key="psara-lic" path="/psara-license" element={<PSARALicense />} />,
    <Route key="trade-lic" path="/trade-license" element={<TradeLicense />} />,
    <Route key="music-lic" path="/music-license" element={<MusicLicense />} />,
    <Route key="health-trade-lic" path="/health-trade-license" element={<HealthTradeLicense />} />,

    // Government Registration
    <Route key="msme-reg" path="/msme-registration" element={<MSMERegistration />} />,
    <Route key="iec-reg" path="/iec-registration" element={<IECRegistration />} />,
    <Route key="epf-reg" path="/epf-registration" element={<EPFRegistration />} />,
    <Route key="rera-reg" path="/rera-registration" element={<RERARaegistration />} />,
    <Route key="nsic-reg" path="/nsic-registration" element={<NSICRegistration />} />,
    <Route key="esi-reg" path="/esi-registration" element={<ESIRegistration />} />,

    // ISO Registration
    <Route key="iso-reg" path="/iso-registration" element={<ISORegistration />} />,
    <Route key="iso-50001-reg" path="/iso-50001-energy-management" element={<ISO50001Registration />} />,
    <Route key="iso-45001-reg" path="/iso-45001-certification" element={<ISO45001Registration />} />,
    <Route key="iso-39001-reg" path="/iso-39001-certification" element={<ISO39001Registration />} />,
    <Route key="iso-14001-reg" path="/iso-certification-14001-ems" element={<ISO14001 />} />,
    <Route key="iso-37001-2016-reg" path="/iso-37001-2016-certification" element={<ISO370012016 />} />,
    <Route key="iso-22000-reg" path="/iso-22000-certification-fsms" element={<ISO22000 />} />,
];

export default StartupRoutes;
