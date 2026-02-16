import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const HomeAppliances = () => {
    return <LitigationLayout content={litigationContent['home-appliances-consumer-complaint']} />;
};

export default HomeAppliances;
