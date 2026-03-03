import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Medical = () => {
    return <LitigationLayout content={litigationContent['medical-consumer-complaint']} />;
};

export default Medical;
