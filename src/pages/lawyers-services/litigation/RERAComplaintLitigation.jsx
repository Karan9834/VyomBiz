import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const RERAComplaintLitigation = () => {
    return <LitigationLayout content={litigationContent['rera-complaint']} />;
};

export default RERAComplaintLitigation;
