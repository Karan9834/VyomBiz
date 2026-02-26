import React from 'react';
import LawyerSpecializationLayout from '../../../components/lawyers-services/LawyerSpecializationLayout';

const ChequeBounceLawyers = () => {
    const lawyers = [
        {
            name: "Meghxxxxxxxri",
            experience: "34 years of Experience",
            location: "Delhi",
            skills: "Cheque Bounce + 14 more",
            phone: "+91 6236****14",
            image: "https://randomuser.me/api/portraits/men/1.jpg" // Placeholder
        },
        {
            name: "Siddxxxxxxxxxxxxle",
            experience: "5 years of Experience",
            location: "Mumbai",
            skills: "Cheque Bounce + 9 more",
            phone: "+91 7237****14",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Apekxxxxxxxxxxal",
            experience: "6 years of Experience",
            location: "Aurangabad, Jalgaon",
            skills: "Cheque Bounce + 19 more",
            phone: "+91 7049****78",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        }
    ];

    const cities = [
        "Delhi", "Mumbai", "Aurangabad", "Jalgaon", "Nagpur", "Zahirabad",
        "Ahmedabad", "Surat", "Chennai", "Nashik", "Niphad", "Solapur"
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            text: "I was involved in a contract breach dispute and wasn't sure where to start. The legal team guided me through every step, they helped me send the legal notice ensuring a smooth resolution with an expert legal guidance."
        },
        {
            name: "Neha Verma",
            text: "When faced with criminal charges, I was anxious and uncertain. The Lawyer's crafted a solid defense that helped me avoid serious penalties and ultimately achieve a positive outcome."
        },
        {
            name: "Anil Sharma",
            text: "I was wrongfully terminated from my job. I hired an employment lawyer who was thorough and aggressive, ensuring I got the compensation and justice I deserved. If you want quick legal solution I recommend you to choose us."
        }
    ];

    return (
        <LawyerSpecializationLayout
            title="Cheque Bounce Lawyers"
            description="Cheque Bounce Lawyers offer expert legal support for individuals and businesses facing cheque dishonor cases. We assist in the entire process, from sending legal notices to representing you in court. Whether you're the issuer or the recipient of the bounced cheque, we provide clear, practical legal solutions to protect your financial interests. Reach out to us for efficient and effective resolution of cheque bounce matters."
            lawyers={lawyers}
            cities={cities}
            testimonials={testimonials}
        />
    );
};

export default ChequeBounceLawyers;
