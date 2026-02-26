import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const IntellectualPropertyInfringement = () => {
    return <LitigationLayout content={litigationContent['intellectual-property-infringement']} />;
};

export default IntellectualPropertyInfringement;
