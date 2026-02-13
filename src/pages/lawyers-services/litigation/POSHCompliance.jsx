import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const POSHCompliance = () => {
    return <LitigationLayout content={litigationContent['posh-compliance']} />;
};

export default POSHCompliance;
