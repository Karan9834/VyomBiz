import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const ITCompanies = () => {
    return <LitigationLayout content={litigationContent['it-companies-consumer-complaint']} />;
};

export default ITCompanies;
