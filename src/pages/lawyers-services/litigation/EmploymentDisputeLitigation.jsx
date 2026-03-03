import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const EmploymentDisputeLitigation = () => {
    return <LitigationLayout content={litigationContent['employment-dispute-litigation']} />;
};

export default EmploymentDisputeLitigation;
