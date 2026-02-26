import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const CyberCrimeLitigation = () => {
    return <LitigationLayout content={litigationContent['cyber-crime-litigation']} />;
};

export default CyberCrimeLitigation;
