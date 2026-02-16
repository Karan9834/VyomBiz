import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Investment = () => {
    return <LitigationLayout content={litigationContent['investment-consumer-complaint']} />;
};

export default Investment;
