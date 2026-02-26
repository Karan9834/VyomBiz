import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Automobile = () => {
    return <LitigationLayout content={litigationContent['automobile-consumer-complaint']} />;
};

export default Automobile;
