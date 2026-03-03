import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Travel = () => {
    return <LitigationLayout content={litigationContent['travel-consumer-complaint']} />;
};

export default Travel;
