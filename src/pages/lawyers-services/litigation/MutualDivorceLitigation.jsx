import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const MutualDivorceLitigation = () => {
    return <LitigationLayout content={litigationContent['mutual-divorce']} />;
};

export default MutualDivorceLitigation;
