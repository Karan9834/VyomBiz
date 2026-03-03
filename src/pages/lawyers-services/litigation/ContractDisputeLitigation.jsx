import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const ContractDisputeLitigation = () => {
    return <LitigationLayout content={litigationContent['contract-dispute-litigation']} />;
};

export default ContractDisputeLitigation;
