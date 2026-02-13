import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const Bank = () => {
    return <LitigationLayout content={litigationContent['bank-consumer-complaint']} />;
};

export default Bank;
