import React from 'react';
import { Routes } from 'react-router-dom';
import StartupRoutes from './StartupRoutes';
import ComplianceRoutes from './ComplianceRoutes';
import IPRoutes from './IPRoutes';
import LegalRoutes from './LegalRoutes';
import CertRoutes from './CertRoutes';
import MainRoutes from './MainRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            {MainRoutes}
            {StartupRoutes}
            {ComplianceRoutes}
            {IPRoutes}
            {LegalRoutes}
            {CertRoutes}
        </Routes>
    );
};

export default AppRoutes;
