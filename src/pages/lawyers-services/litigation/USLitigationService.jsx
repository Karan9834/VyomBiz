import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const USLitigationService = () => {
    return <LitigationLayout content={litigationContent['us-litigation-service']} />;
};

export default USLitigationService;
