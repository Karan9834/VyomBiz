import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const PropertyLitigation = () => {
    return <LitigationLayout content={litigationContent['property-litigation']} />;
};

export default PropertyLitigation;
