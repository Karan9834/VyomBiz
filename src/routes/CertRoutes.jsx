import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// FSSAI
const FssaiLicense = lazy(() => import('../pages/startup/FssaiEating/FssaiLicense'));
const FssaiRenewal = lazy(() => import('../pages/startup/FssaiEating/FssaiRenewal'));
const FssaiStateLicense = lazy(() => import('../pages/startup/FssaiEating/FssaiStateLicense'));
const EatingHouseLicense = lazy(() => import('../pages/startup/FssaiEating/EatingHouseLicense'));
const CentralFssaiLicense = lazy(() => import('../pages/startup/FssaiEating/CentralFssaiLicense'));
const FssaiAnnualReturn = lazy(() => import('../pages/startup/FssaiEating/FssaiAnnualReturn'));
const FssaiProductApproval = lazy(() => import('../pages/startup/FssaiEating/FssaiProductApproval'));
const FoodRecyclingLicense = lazy(() => import('../pages/startup/FssaiEating/FoodRecyclingLicense'));
const FPOMarkCertification = lazy(() => import('../pages/startup/FssaiEating/FPOMarkCertification'));

// ISO
const ISORegistration = lazy(() => import('../pages/startup/ISO/ISORegistration'));
const ISO37001Registration = lazy(() => import('../pages/startup/ISO/ISO37001Registration'));
const ISO14001Registration = lazy(() => import('../pages/startup/ISO/ISO14001Registration'));
const ISO27001Registration = lazy(() => import('../pages/startup/ISO/ISO27001Registration'));
const ISO22000Registration = lazy(() => import('../pages/startup/ISO/ISO22000Registration'));
const ISO9001Registration = lazy(() => import('../pages/startup/ISO/ISO9001Registration'));
const ISO50001Registration = lazy(() => import('../pages/startup/ISO/ISO50001Registration'));
const ISO45001Registration = lazy(() => import('../pages/startup/ISO/ISO45001Registration'));
const ISO20000Registration = lazy(() => import('../pages/startup/ISO/ISO20000Registration'));
const ISO31000Registration = lazy(() => import('../pages/startup/ISO/ISO31000Registration'));
const ISO13485Registration = lazy(() => import('../pages/startup/ISO/ISO13485Registration'));
const ISO21101Registration = lazy(() => import('../pages/startup/ISO/ISO21101Registration'));
const ISO16001Registration = lazy(() => import('../pages/startup/ISO/ISO16001Registration'));
const ISO39001Registration = lazy(() => import('../pages/startup/ISO/ISO39001Registration'));
const ISO2768Registration = lazy(() => import('../pages/startup/ISO/ISO2768Registration'));

const CertRoutes = [
    // FSSAI
    <Route key="fssai" path="/fssai-license" element={<FssaiLicense />} />,
    <Route key="fssai-ren" path="/fssai-license-renewal" element={<FssaiRenewal />} />,
    <Route key="fssai-st" path="/fssai-state-license" element={<FssaiStateLicense />} />,
    <Route key="eat-hse" path="/eating-house-license" element={<EatingHouseLicense />} />,
    <Route key="cnt-fssai" path="/central-fssai-license" element={<CentralFssaiLicense />} />,
    <Route key="fssai-ann" path="/fssai-annual-return" element={<FssaiAnnualReturn />} />,
    <Route key="fssai-prod" path="/fssai-product-approval" element={<FssaiProductApproval />} />,
    <Route key="food-rec" path="/food-recycling-license" element={<FoodRecyclingLicense />} />,
    <Route key="fpo-mk" path="/fpo-mark-certification" element={<FPOMarkCertification />} />,

    // ISO
    <Route key="iso" path="/iso-registration" element={<ISORegistration />} />,
    <Route key="iso37001" path="/iso-37001-2016-certification" element={<ISO37001Registration />} />,
    <Route key="iso14001" path="/iso-14001-ems" element={<ISO14001Registration />} />,
    <Route key="iso27001" path="/iso-27001-isms" element={<ISO27001Registration />} />,
    <Route key="iso22000" path="/iso-22000-fsms" element={<ISO22000Registration />} />,
    <Route key="iso9001" path="/iso-9001-2015" element={<ISO9001Registration />} />,
    <Route key="iso50001" path="/iso-50001-energy-management" element={<ISO50001Registration />} />,
    <Route key="iso45001" path="/iso-45001-certification" element={<ISO45001Registration />} />,
    <Route key="iso20000" path="/iso-20000-certification" element={<ISO20000Registration />} />,
    <Route key="iso31000" path="/iso-31000-certification" element={<ISO31000Registration />} />,
    <Route key="iso13485" path="/iso-13485-certification" element={<ISO13485Registration />} />,
    <Route key="iso21101" path="/iso-21101-2014-certification" element={<ISO21101Registration />} />,
    <Route key="iso16001" path="/iso-16001-certification" element={<ISO16001Registration />} />,
    <Route key="iso39001" path="/iso-39001-certification" element={<ISO39001Registration />} />,
    <Route key="iso2768" path="/iso-2768-1-certification" element={<ISO2768Registration />} />,
];

export default CertRoutes;
