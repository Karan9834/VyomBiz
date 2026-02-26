import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Insurance = () => {
    return <LitigationLayout content={litigationContent['insurance-consumer-complaint']} />;
};

export default Insurance;
