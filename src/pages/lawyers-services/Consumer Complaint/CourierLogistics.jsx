import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const CourierLogistics = () => {
    return <LitigationLayout content={litigationContent['courier-logistics-consumer-complaint']} />;
};

export default CourierLogistics;
