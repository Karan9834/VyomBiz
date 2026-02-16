import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Grievances = () => {
    return <LitigationLayout content={litigationContent['grievances-consumer-complaint']} />;
};

export default Grievances;
