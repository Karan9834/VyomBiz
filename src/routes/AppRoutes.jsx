import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartupRoutes from './StartupRoutes';
import ComplianceRoutes from './ComplianceRoutes';
import IPRoutes from './IPRoutes';
import LegalRoutes from './LegalRoutes';
import CertRoutes from './CertRoutes';
import EnvironmentalRoutes from './EnvironmentalRoutes';
import MainRoutes from './MainRoutes';

const NotFound = lazy(() => import('../pages/error/NotFound'));

const AppRoutes = () => {
    return (
        <Routes>
            {MainRoutes}
            {StartupRoutes}
            {ComplianceRoutes}
            {IPRoutes}
            {LegalRoutes}
            {CertRoutes}
            {EnvironmentalRoutes}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
