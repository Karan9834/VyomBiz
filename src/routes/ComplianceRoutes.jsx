import React, { lazy } from 'react';
import { Route } from 'react-router-dom';


const Compliance = lazy(() => import('../pages/compliance/Compliance'));
const ClosingLLP = lazy(() => import('../pages/compliance/CompanySecretarial/ClosingLLP'));
const AnnualFilingLLP = lazy(() => import('../pages/compliance/CompanySecretarial/AnnualFilingLLP'));
const ChangeInObjectClause = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeInObjectClause'));
const MCACompliance = lazy(() => import('../pages/compliance/CompanySecretarial/MCACompliance'));
const AnnualCompliancePvtLtd = lazy(() => import('../pages/compliance/CompanySecretarial/AnnualCompliancePvtLtd'));
const EventBasedCompliances = lazy(() => import('../pages/compliance/CompanySecretarial/EventBasedCompliances'));
const ChangeInNameClause = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeInNameClause'));
const NidhiCompanyCompliance = lazy(() => import('../pages/compliance/CompanySecretarial/NidhiCompanyCompliance'));
const NBFCCompliance = lazy(() => import('../pages/compliance/CompanySecretarial/NBFCCompliance'));
const ChangeInShareCapital = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeInShareCapital'));
const ChangeInLLPAgreement = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeInLLPAgreement'));
const AGRReturnFiling = lazy(() => import('../pages/compliance/CompanySecretarial/AGRReturnFiling'));
const FormMGT7 = lazy(() => import('../pages/compliance/CompanySecretarial/FormMGT7'));
const AGILEPROS = lazy(() => import('../pages/compliance/CompanySecretarial/AGILEPROS'));

const ChangeinDirectors = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeinDirectors'));
const WindingUpofPrivateLimitedCompany = lazy(() => import('../pages/compliance/CompanySecretarial/WindingUpofPrivateLimitedCompany'));
const AnnualComplianceofaPvtLtdCompany = lazy(() => import('../pages/compliance/CompanySecretarial/AnnualComplianceofaPvtLtdCompany'));
const AppointmentandResignationofDirectors = lazy(() => import('../pages/compliance/CompanySecretarial/AppointmentandResignationofDirectors'));
const ChangeinRegisteredOffice = lazy(() => import('../pages/compliance/CompanySecretarial/ChangeinRegisteredOffice'));
const EventBasedCompliancesinaCompany = lazy(() => import('../pages/compliance/CompanySecretarial/EventBasedCompliancesinaCompany'));
const FormAOC4 = lazy(() => import('../pages/compliance/CompanySecretarial/FormAOC4'));
const LiquidationofCompany = lazy(() => import('../pages/compliance/CompanySecretarial/LiquidationofCompany'));
const RemovalofDirector = lazy(() => import('../pages/compliance/CompanySecretarial/RemovalofDirector'));
const RevivalofStruckOffCompanies = lazy(() => import('../pages/compliance/CompanySecretarial/RevivalofStruckOffCompanies'));
const SPICEForm = lazy(() => import('../pages/compliance/CompanySecretarial/SPICEForm'));
const Section8CompanyCompliance = lazy(() => import('../pages/compliance/CompanySecretarial/Section8CompanyCompliance'));

const GSTAnnualReturnFiling = lazy(() => import('../pages/compliance/Tax Filing - Compliance/GSTAnnualReturnFiling'));
const GSTComplianceServices = lazy(() => import('../pages/compliance/Tax Filing - Compliance/GSTComplianceServices'));
const GSTRegistration = lazy(() => import('../pages/compliance/Tax Filing - Compliance/GSTRegistration'));
const IncomeTaxAdvisory = lazy(() => import('../pages/compliance/Tax Filing - Compliance/IncomeTaxAdvisory'));
const IncomeTaxReturnFiling = lazy(() => import('../pages/compliance/Tax Filing - Compliance/IncomeTaxReturnFiling'));
const TDSReturnFiling = lazy(() => import('../pages/compliance/Tax Filing - Compliance/TDSReturnFiling'));

const ComplianceRoutes = [
 
    <Route key="compliance" path="/compliance" element={<Compliance />} />,
    
    <Route key="gst-ann-ret" path="/gst-annual-return-filing" element={<GSTAnnualReturnFiling />} />,
    <Route key="gst-comp" path="/gst-compliance-services" element={<GSTComplianceServices />} />,
    <Route key="gst-reg" path="/gst-registration" element={<GSTRegistration />} />,
    <Route key="it-adv" path="/income-tax-advisory" element={<IncomeTaxAdvisory />} />,
    <Route key="it-ret" path="/income-tax-return-filing" element={<IncomeTaxReturnFiling />} />,
    <Route key="tds-ret" path="/tds-return-filing" element={<TDSReturnFiling />} />,
    <Route key="close-llp" path="/closing-a-limited-liability-partnership" element={<ClosingLLP />} />,
    <Route key="ann-filing-llp" path="/annual-filing-for-llp" element={<AnnualFilingLLP />} />,
    <Route key="chg-obj-clause" path="/change-in-object-clause" element={<ChangeInObjectClause />} />,
    <Route key="mca-comp" path="/mca-compliance" element={<MCACompliance />} />,
    <Route key="ann-comp-pvt" path="/annual-compliance-of-a-private-limited-company" element={<AnnualCompliancePvtLtd />} />,
    <Route key="evt-comp" path="/event-based-compliances-in-a-company" element={<EventBasedCompliances />} />,
    <Route key="chg-name-clause" path="/change-in-name-clause" element={<ChangeInNameClause />} />,
    <Route key="nidhi-comp" path="/nidhi-company-compliance" element={<NidhiCompanyCompliance />} />,
    <Route key="nbfc-comp" path="/nbfc-compliance" element={<NBFCCompliance />} />,
    <Route key="chg-shr-cap" path="/change-in-share-capital" element={<ChangeInShareCapital />} />,
    <Route key="chg-llp-agr" path="/change-in-llp-agreement" element={<ChangeInLLPAgreement />} />,
    <Route key="agr-ret-filing" path="/agr-return-filing" element={<AGRReturnFiling />} />,
    <Route key="form-mgt7" path="/form-mgt-7" element={<FormMGT7 />} />,
    <Route key="agile-pro" path="/agile-pro-s" element={<AGILEPROS />} />,

    <Route key="chg-dir" path="/change-directors" element={<ChangeinDirectors />} />,
    <Route key="wind-up-pvt" path="/winding-up-of-private-limited-company" element={<WindingUpofPrivateLimitedCompany />} />,
    <Route key="ann-comp-pvt-ltd" path="/annual-compliance-pvt-ltd" element={<AnnualComplianceofaPvtLtdCompany />} />,
    <Route key="appt-dir" path="/appointment-resignation-directors" element={<AppointmentandResignationofDirectors />} />,
    <Route key="chg-reg-off" path="/change-registered-office" element={<ChangeinRegisteredOffice />} />,
    <Route key="evt-comp-co" path="/event-based-compliances" element={<EventBasedCompliancesinaCompany />} />,
    <Route key="form-aoc4" path="/form-aoc-4" element={<FormAOC4 />} />,
    <Route key="liq-co" path="/liquidation-company" element={<LiquidationofCompany />} />,
    <Route key="rem-dir" path="/removal-director" element={<RemovalofDirector />} />,
    <Route key="rev-struck" path="/revival-struck-off-companies" element={<RevivalofStruckOffCompanies />} />,
    <Route key="spice-plus" path="/spice-plus-form" element={<SPICEForm />} />,
    <Route key="sec8-comp" path="/section-8-compliance" element={<Section8CompanyCompliance />} />,
];

export default ComplianceRoutes;
