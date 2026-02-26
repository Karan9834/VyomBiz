import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const RealEstate = () => {
    return <LitigationLayout content={litigationContent['real-estate-consumer-complaint']} />;
};

export default RealEstate;
