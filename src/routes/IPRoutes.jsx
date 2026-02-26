import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const IPTrademark = lazy(() => import('../pages/ip-trademark/IPTrademark'));
const TrademarkRegistration = lazy(() => import('../pages/ip-trademark/Trademarks India/TrademarkRegistration'));
const TrademarkWatchServices = lazy(() => import('../pages/ip-trademark/TM Watch/TrademarkWatchServices'));
const InternationalTrademarkRegistration = lazy(() => import('../pages/ip-trademark/InternationalTM/InternationalTrademarkRegistration'));
const DesignRegistration = lazy(() => import('../pages/ip-trademark/Designs/DesignRegistration'));
const GI = lazy(() => import('../pages/ip-trademark/GI/RegistrationOFGeographicalIndication'));
const CopyrightRegistration = lazy(() => import('../pages/ip-trademark/Copyright/CopyrightRegistration'));
const PatentRegistration = lazy(() => import('../pages/ip-trademark/Patent/PatentRegistration'));
const PatentDueDiligence = lazy(() => import('../pages/ip-trademark/Advisory/PatentDueDiligence'));

const TrademarkAssignment = lazy(() => import('../pages/ip-trademark/Trademarks India/TrademarkAssignment'));
const TrademarkClassesFinder = lazy(() => import('../pages/ip-trademark/Trademarks India/TrademarkClassesFinder'));
const TrademarkOpposition = lazy(() => import('../pages/ip-trademark/Trademarks India/TrademarkOpposition'));
const IntellectualPropertyDispute = lazy(() => import('../pages/ip-trademark/Trademarks India/IntellectualPropertyDispute'));

const IPRoutes = [
    <Route key="ip-tm" path="/ip-trademark" element={<IPTrademark />} />,
    <Route key="tm-reg" path="/trademark-registration" element={<TrademarkRegistration />} />,
    <Route key="tm-ass" path="/trademark-assignment" element={<TrademarkAssignment />} />,
    <Route key="tm-cls" path="/trademark-classes-finder" element={<TrademarkClassesFinder />} />,
    <Route key="tm-opp" path="/trademark-opposition" element={<TrademarkOpposition />} />,
    <Route key="ip-disp" path="/intellectual-property-dispute" element={<IntellectualPropertyDispute />} />,
    <Route key="tm-watch" path="/trademark-watch-services" element={<TrademarkWatchServices />} />,
    <Route key="int-tm-reg" path="/international-trademark-registration" element={<InternationalTrademarkRegistration />} />,
    <Route key="dsn-reg" path="/design-registration" element={<DesignRegistration />} />,
    <Route key="gi-reg" path="/gi-registration" element={<GI />} />,
    <Route key="cpr-reg" path="/copyright-registration" element={<CopyrightRegistration />} />,
    <Route key="pat-reg" path="/patent-registration" element={<PatentRegistration />} />,
    <Route key="pat-due" path="/patent-due-diligence" element={<PatentDueDiligence />} />,
];

export default IPRoutes;
