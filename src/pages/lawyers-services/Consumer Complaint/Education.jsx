import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Education = () => {
    return <LitigationLayout content={litigationContent['education-consumer-complaint']} />;
};

export default Education;
