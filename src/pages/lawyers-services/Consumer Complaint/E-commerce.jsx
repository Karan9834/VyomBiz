import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Ecommerce = () => {
    return <LitigationLayout content={litigationContent['ecommerce-consumer-complaint']} />;
};

export default Ecommerce;
