import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const RetailBusiness = () => {
    return <LitigationLayout content={litigationContent['retail-business-consumer-complaint']} />;
};

export default RetailBusiness;
