import React from 'react';
import LitigationLayout from '../../../components/litigation/LitigationLayout';
import { litigationContent } from '../../../constants/litigation-content';

const DefamationComplaint = () => {
    return <LitigationLayout content={litigationContent['defamation-complaint']} />;
};

export default DefamationComplaint;
