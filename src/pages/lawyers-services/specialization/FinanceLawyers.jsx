import React from 'react';
import LawyerSpecializationLayout from '../../../components/lawyers-services/LawyerSpecializationLayout';

const FinanceLawyers = () => {
    const lawyers = [
        {
            name: "Ramesh Gupta",
            experience: "15 years of Experience",
            location: "Mumbai",
            skills: "Finance Law + 10 more",
            phone: "+91 98xxxxxxxx",
            image: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            name: "Sita Verma",
            experience: "8 years of Experience",
            location: "Delhi",
            skills: "Banking & Finance + 5 more",
            phone: "+91 99xxxxxxxx",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Arjun Singh",
            experience: "12 years of Experience",
            location: "Bangalore",
            skills: "Corporate Finance + 8 more",
            phone: "+91 97xxxxxxxx",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ];

    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune",
        "Kolkata", "Ahmedabad", "Gurgaon", "Noida", "Chandigarh", "Jaipur"
    ];

    const testimonials = [
        {
            name: "Vikram Malhotra",
            text: "Expert guidance on complex financial regulations. The team helped us navigate through difficult compliance issues smoothly."
        },
        {
            name: "Priya Sharma",
            text: "Highly recommended for banking disputes. Their expertise in finance law is evident and we got a favorable outcome."
        },
        {
            name: "Rahul Desai",
            text: "Professional and knowledgeable. Helped structure our investment deals with great attention to detail."
        }
    ];

    return (
        <LawyerSpecializationLayout
            title="Finance Lawyers"
            description="Finance Lawyers offer expert legal support for individuals and businesses facing financial legal matters. We assist in banking disputes, investment regulations, and corporate finance. Whether you're dealing with loans, securities, or regulatory compliance, we provide clear, practical legal solutions to protect your financial interests."
            lawyers={lawyers}
            cities={cities}
            testimonials={testimonials}
        />
    );
};

export default FinanceLawyers;
