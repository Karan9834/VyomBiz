import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const StreamingPlatforms = () => {
    return <LitigationLayout content={litigationContent['streaming-platforms-consumer-complaint']} />;
};

export default StreamingPlatforms;
