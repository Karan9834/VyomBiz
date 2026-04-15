import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const SoilTesting = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Soil"
                    heroTitleSuffix="Testing Services"
                    heroDescription="Worried about soil fertility and productivity? Talk to our seasoned environmental consultants for soil testing services to maximize your agricultural potential by 10X!"
                    stats={[
                        { count: "43K+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Soil Testing —",
                        highlightTitle: "An Overview",
                        description: [
                            "Soil Testing is a chemical analysis recognized as a scientific means for quick characterization of soil fertility & nutrient status. It ensures conducting an agricultural analysis for a variety of factors such as chemical content, toxicity, pH level, salinity, and earth-dwelling biota.",
                            "Regular soil testing is not only important for the producers but also benefits all valuable agribusiness participants, such as agri-coops, crop insurers, banks, input suppliers, and commodities dealers.",
                            "The objective of soil testing is to sort out nutrient-deficient areas from non-deficient ones and ensure these elements interact with each other in a complex balance affecting crop growth."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of Soil Testing",
                        subtitle: "Why to conduct soil testing?",
                        list: [
                            { title: "Determination of Soil Types", desc: "Determines the type of soil supplying adequate nutrients for optimum crop production." },
                            { title: "Improved Crop Yields", desc: "Identifies nutrient deficiencies or imbalances, enabling growers to adjust fertilization practices and improve crop yields." },
                            { title: "Environmental Protection", desc: "Enables applicants to reduce the risk of nutrient run-off and associated environmental problems." },
                            { title: "Measurement of Water Table", desc: "Measures information respecting soil salinity, frequency of water logging, and water table levels." },
                            { title: "Determining Capabilities", desc: "Assists the Construction Industry by indicating load-bearing limits, depth requirements for pillars, and foundation strength." }
                        ]
                    }}
                    eligibility={{
                        title: "Applications of Soil Testing",
                        subtitle: "Industries needing these services",
                        list: [
                            { title: "Agriculture & Farmers", desc: "Improve crop performance, determine crop nutrient tracking, and maximize profitability yields." },
                            { title: "Construction & Real Estate", desc: "Assess mineral/chemical compositions (like sulphur presence) influencing the choice of construction material and foundational stability." },
                            { title: "Environmentalists & Researchers", desc: "Identify sources of contamination, chemical toxicity levels and ensure mitigation." },
                            { title: "Mining & Waste Management", desc: "Assess pre and post-operation earth strata for environmental impact and restoration." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Testing Methods",
                        subtitle: "Popular soil analysis tests",
                        list: [
                            { title: "Soil Nutrient & Acidity", desc: "Tests Nitrogen (N), Phosphorus (P), Potassium (K) levels, and hydrogen ions/pH ranges." },
                            { title: "Physical Soil & Moisture", desc: "Evaluates texture, structure, specific gravity, and the evaporation moisture retained at high temperatures." },
                            { title: "Compaction & Dry Density Test", desc: "Evaluates the mass of soil per unit volume, establishing load-bearing capacities for construction engineering." },
                            { title: "Atterberg Limits Test", desc: "Evaluates the moisture content at different states (liquid, plastic, and solid) required for foundational assessments." }
                        ]
                    }}
                    process={{
                        title: "Step-by-Step Procedure",
                        subtitle: "How to conduct effective soil testing",
                        steps: [
                            { step: "1", title: "Select Testing Laboratory", desc: "Find authorized local or state/private soil testing laboratories offering sample analytical methods." },
                            { step: "2", title: "Take Soil Samples", desc: "Use techniques like grid, zone, or cone sampling. Collect samples around 2 hours after fertilization avoiding aberrant plants." },
                            { step: "3", title: "Submit for Analysis", desc: "Submit collected sealed samples using paper bags to the laboratory and ensure consistent compliance with sampling protocols." },
                            { step: "4", title: "Review Soil Report", desc: "Review details related to nutrient levels, pH, structural density, water tables, and expert recommendations." },
                            { step: "5", title: "Implement Best Practices", desc: "Adjust fertilizer applications, implement bio-remediation, or alter structural design plans based on precise data insights." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about soil testing"
                    faqs={[
                        {
                            question: "What is the difference between soil testing and soil sampling?",
                            answer: "Soil sampling is the actual physical procedure of collecting earth/dirt using probes and sending the sample to a laboratory. Soil testing is the subsequent chemical/physical analysis performed directly by the lab on that sample."
                        },
                        {
                            question: "When is the best time to conduct soil testing?",
                            answer: "It is best conducted right after harvesting or before the onset of the crop season. For croplands, sampling in the fall is ideal, while summer ending is preferable for perennial crops."
                        },
                        {
                            question: "What does Atterberg limit test reveal?",
                            answer: "It reveals the critical moisture contents at which fine-grained soils transition between solid, semi-solid, plastic, and liquid states—highly essential for construction capabilities."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default SoilTesting;

