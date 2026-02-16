import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Hotels = () => {
    return <LitigationLayout content={litigationContent['hotels-consumer-complaint']} />;
};

export default Hotels;
