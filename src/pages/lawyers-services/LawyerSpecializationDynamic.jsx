import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import LawyerSpecializationLayout from '../../components/lawyers-services/LawyerSpecializationLayout';
import { lawyerSpecializationData } from '../../constants/lawyer-specialization-data';
import PageTemplate from '../../components/common/PageTemplate';

const LawyerSpecializationDynamic = () => {
    const { type } = useParams();

    // Helper to format default content if not found in data
    const formatName = (slug) => {
        return slug
            ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : 'Lawyers';
    };

    const data = useMemo(() => {
        const key = type?.toLowerCase();

        // Return existing data if available
        if (lawyerSpecializationData[key]) {
            return lawyerSpecializationData[key];
        }

        // Generate generic data based on the type
        const title = formatName(key);
        return {
            title: title || "Expert Lawyers",
            description: `${title} provide specialized legal services to handle your cases with expertise. Our team of experienced lawyers ensures that you get the best legal representation and guidance for your specific needs.`,
            lawyers: [
                {
                    name: "Experienced Lawyer 1",
                    experience: "10+ years of Experience",
                    location: "Major Cities",
                    skills: `${title} + 5 more`,
                    phone: "+91 9xxxxxxxxx"
                },
                {
                    name: "Experienced Lawyer 2",
                    experience: "8+ years of Experience",
                    location: "Major Cities",
                    skills: `${title} + 3 more`,
                    phone: "+91 8xxxxxxxxx"
                },
                {
                    name: "Experienced Lawyer 3",
                    experience: "15+ years of Experience",
                    location: "Major Cities",
                    skills: `${title} + 10 more`,
                    phone: "+91 7xxxxxxxxx"
                }
            ],
            cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"],
            testimonials: [
                {
                    name: "Satisfied Client 1",
                    text: `I hired a lawyer for ${title} and got excellent support. The process was smooth and transparent.`
                },
                {
                    name: "Satisfied Client 2",
                    text: "Professional and dedicated team. Highly recommended for any legal issues."
                },
                {
                    name: "Satisfied Client 3",
                    text: "Great experience working with them. They handled my case very effectively."
                }
            ]
        };
    }, [type]);


    if (!data) return <PageTemplate title="Lawyer Services Not Found" />;

    return (
        <LawyerSpecializationLayout
            title={data.title}
            description={data.description}
            lawyers={data.lawyers}
            cities={data.cities}
            testimonials={data.testimonials}
        />
    );
};

export default LawyerSpecializationDynamic;
