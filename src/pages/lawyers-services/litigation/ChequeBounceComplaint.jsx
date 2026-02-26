import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const ChequeBounceComplaint = () => {
    return <LitigationLayout content={litigationContent['cheque-bounce-complaint']} />;
};

export default ChequeBounceComplaint;
