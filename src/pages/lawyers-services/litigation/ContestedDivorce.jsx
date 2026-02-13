import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const ContestedDivorce = () => {
    return <LitigationLayout content={litigationContent['contested-divorce']} />;
};

export default ContestedDivorce;
