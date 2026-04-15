import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const AuthorizedVehicleScrappingFacilityVSF = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Authorized Vehicle"
                    heroTitleSuffix="Scrapping Facility (AVSF)"
                    heroDescription="Set up your Authorized Vehicle Scrapping Facility (AVSF) with us. Expert assistance for hassle-free registration, compliance, and documentation to start your business."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Authorized Vehicle Scrapping Facility (AVSF) —",
                        highlightTitle: "An Overview",
                        description: [
                            "The Central Government has notified the guidelines for setting up and operating Authorized Vehicle Scrapping Facility in India. This applies to the vehicles that are no longer validly Authorized under the Motor Vehicle Act or where the owners desire to scrap their vehicles.",
                            "This facility ensures safe disposal of such vehicles along with protection of environment and promotion of legally compliant vehicle dismantling and scraping industry. Respective state/UT government grants authorization for starting RVS Facility in India."
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Essential Terms",
                        subtitle: "Understanding Vehicle Scrapping terms",
                        list: [
                            {
                                title: "Authorized scrapper",
                                desc: "A person, firm, society, trust or company that owns and operates Authorized Vehicle Scrapping Facility."
                            },
                            {
                                title: "Authorized Vehicle Scrapping Facility",
                                desc: "An establishment holding any authorization for vehicle scrapping issued under guidelines for performing dismantling and scrapping."
                            },
                            {
                                title: "Deposit certificate",
                                desc: "A certificate issued by the AVSF to recognize the transfer of vehicle ownership from the Authorized owner to the authorized scrapper."
                            },
                            {
                                title: "Vehicle scrapping certificate & Scrapping yard",
                                desc: "A certificate recognizing the final disposal of vehicle. A scrapping yard is the location where the dismantled parts of the vehicle are processed for treatment."
                            }
                        ]
                    }}

                    advantages={{
                        title: "Which vehicle qualifies",
                        subtitle: "Vehicles that qualify for scrapping",
                        list: [
                            {
                                title: "Non-Renewed or Unfit",
                                desc: "Vehicles that have not renewed their original certificate of registration or not granted fitness certificate."
                            },
                            {
                                title: "Damaged or Obsolete",
                                desc: "Vehicles damaged due to fire, riot, natural disaster, accident, or declared obsolete by the government."
                            },
                            {
                                title: "Others",
                                desc: "Vehicles that have outlived utility, test vehicles, auctioned, impounded and abandoned vehicles."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria",
                        subtitle: "For obtaining authorization by proposed AVSF",
                        list: [
                            "Owned and operated by a legal entity with certificate of incorporation, valid GST registration, and valid PAN.",
                            "Entity should have applied for or possess establishment license from the authority.",
                            "Must fulfill minimum technical requirements with the workforce and equipment to perform dismantling activities.",
                            "Must undertake to get required quality certifications in 12 months.",
                            "Should provide approved plan layout and have an environment management plan.",
                            "Will be provided connectivity to VAHAN database and must have security certifications."
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "How to set up an AVSF in India",
                        steps: [
                            {
                                step: "01",
                                title: "Apply to Registration Authority",
                                desc: "Apply to the registration authority of the state government concerned or the UT Administration with the specified fee."
                            },
                            {
                                step: "02",
                                title: "Application Disposal",
                                desc: "The state or union territory administration will dispose of the application within 60 days, after which it will be deemed approved."
                            },
                            {
                                step: "03",
                                title: "Clearance and Process",
                                desc: "The central government will operationalise a single window clearance. The registration is valid for ten years and can be renewed."
                            }
                        ]
                    }}

                    features={{
                        title: "Process of Scrapping",
                        subtitle: "Steps involved in scrapping a vehicle",
                        list: [
                            {
                                title: "Verification & Entry",
                                desc: "AVSF conducts verification and accesses the VAHAN database to make entries about vehicle scrapping."
                            },
                            {
                                title: "Certificates Issuance",
                                desc: "Issues a certificate of deposit allowing benefits for new vehicle purchase, pays the owner, and finally issues a digital certificate of vehicle scrapping."
                            },
                            {
                                title: "Facility Setup",
                                desc: "AVSF must set up a scrapping yard and collection centre to handle, de-pollute and dismantle end-of-life vehicles."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about the facility setup"
                    faqs={[
                        {
                            question: "What is an Authorized Vehicle Scrapping Facility?",
                            answer: "It refers to an establishment holding any authorization for vehicle scrapping issued under guidelines for performing dismantling and scrapping."
                        },
                        {
                            question: "Which vehicles qualify for scrapping?",
                            answer: "Vehicles lacking original registration certificate renewals, unfit vehicles, damaged cars, abandoned, auctioned or obsolete ones typically qualify."
                        },
                        {
                            question: "What is the validity of the authorization?",
                            answer: "The authorization for starting an RVS Facility is valid for 10 years and can be renewed for another 10 years."
                        },
                        {
                            question: "How does AVSF verify vehicles?",
                            answer: "The AVSF is expected to use the VAHAN database, verify the person handing over the vehicle, and keep the copy for a minimum of 6 months."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default AuthorizedVehicleScrappingFacilityVSF;

