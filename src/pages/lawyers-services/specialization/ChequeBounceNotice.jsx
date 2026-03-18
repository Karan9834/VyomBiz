import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ChequeBounceNotice = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Cheque Bounce"
                    heroTitleSuffix="Notice"
                    heroDescription="Recover Your Funds Legally and Swiftly. Issue a formal legal notice for dishonoured cheques under Section 138 of the NI Act. Vyombiz ensures your notice is watertight, professional, and delivered within statutory timelines."
                    stats={[
                        { count: "25,000+", label: "Notices Issued" },
                        { count: "98%", label: "Accuracy" },
                        { count: "24 Hrs", label: "Fast Draft" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Cheque Bounce Notice —",
                        highlightTitle: "Overview",
                        description: [
                            "A cheque bounce notice is a formal legal communication issued to the drawer of a dishonoured cheque. Governed primarily by Section 138 of the Negotiable Instruments Act, 1881, this notice is the first mandatory step in seeking legal recourse for a bounced cheque.",
                            "The notice informs the issuer that the cheque was returned by the bank due to reasons like insufficient funds or signature mismatch. Statutory law requires this notice to be sent within 30 days of receiving the 'Cheque Return Memo' from the bank.",
                            "Sending a professional notice isn't just a suggestion; it is a legal prerequisite. Often, a well-drafted notice prompting the 15-day payment period leads to the settlement of dues without requiring court proceedings."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Notice Importance",
                        subtitle: "Significance of Issuing a Notice",
                        list: [
                            { title: "Mandatory Step", desc: "You cannot file a criminal case without first proving you sent a statutory notice." },
                            { title: "Critical Evidence", desc: "Serves as documentary evidence that the drawer was given a fair chance to pay." },
                            { title: "Clear Information", desc: "Explicitly states the amount, reason for dishonour, and legal consequences." },
                            { title: "Avoid Litigation", desc: "Many drawers settle the amount immediately to avoid criminal court rooms." }
                        ]
                    }}

                    eligibility={{
                        title: "Key Entities",
                        subtitle: "Legal Framework & Involved Parties",
                        list: [
                            { title: "Drawer", desc: "The person or entity that issued the cheque and is held accountable for funds." },
                            { title: "Payee", desc: "The recipient who initiates the legal process by issuing the statutory notice." },
                            { title: "Bank", desc: "Processes the cheque and issues the essential 'Cheque Return Memo'." },
                            { title: "Civil Liability", desc: "Filing under Order 37 CPC to recover the amount with interest." },
                            { title: "Criminal Liability", desc: "Under Section 138 NI Act, facing severe penalties or imprisonment." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Notice Elements",
                        subtitle: "Essential Elements of a Notice",
                        list: [
                            { title: "Identification", desc: "Clear identification and addresses of both the Drawer and the Payee." },
                            { title: "Cheque Info", desc: "Detailed cheque information including number, date, amount, and bank name." },
                            { title: "Return Memo", desc: "Exact date of dishonour as officially stated in the bank's return memo." },
                            { title: "Dishonour Reason", desc: "Specific reason for the bounce, such as 'Insufficient Funds'." },
                            { title: "Act Reference", desc: "Explicit quoting and reference to Section 138 of the NI Act." },
                            { title: "15-Day Demand", desc: "Mandatory statutory demand for payment within 15 days of receiving the notice." }
                        ]
                    }}

                    process={{
                        title: "Key Timelines",
                        subtitle: "Critical Timelines to Remember",
                        steps: [
                            { step: "01", title: "Within 30 Days", desc: "The legal notice MUST be issued within 30 days of receiving the cheque return memo from the bank." },
                            { step: "02", title: "15 Days for Payment", desc: "The drawer gets a strict 15-day period to clear the payment upon receiving the notice." },
                            { step: "03", title: "Within 30 Days", desc: "If unpaid within 15 days, a court complaint must be filed within the next 30 days." },
                            { step: "04", title: "Summons", desc: "The court issues a formal order requiring the drawer to appear and answer allegations." }
                        ]
                    }}

                    features={{
                        title: "Why Trust Vyombiz?",
                        subtitle: "Our Platform's Edge",
                        list: [
                            { title: "Expert Network", desc: "Connect with specialized lawyers experienced in NI Act cases." },
                            { title: "Statutory Speed", desc: "Notices are drafted and dispatched within the strict legal windows." },
                            { title: "Hassle-Free Filing", desc: "From the initial notice to court cases, we handle all the legal paperwork." },
                            { title: "Transparent Support", desc: "Transparent pricing and continuous guidance for swift recovery." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What should I do if I receive a cheque bounce notice?",
                            answer: "Verify the details immediately, check your account balance, and respond within the 15-day timeframe. It's often advisable to settle with the payee or seek legal counsel to draft a formal response."
                        },
                        {
                            question: "What are the common reasons for a cheque to bounce?",
                            answer: "The most common reasons include insufficient funds, signature mismatch, account closure, or overwriting on the cheque leaf."
                        },
                        {
                            question: "What is the legal timeframe for responding to a cheque bounce notice?",
                            answer: "Under the Negotiable Instruments Act, you must respond or settle the payment within 15 days from the date of receiving the formal notice."
                        },
                        {
                            question: "What are the penalties for a bounced cheque under the law?",
                            answer: "Penalties can include imprisonment for up to two years, a fine which can be twice the cheque amount, or both."
                        },
                        {
                            question: "How does the legal process work after a cheque bounce notice is issued?",
                            answer: "If payment isn't made within 15 days of the notice, the payee can file a complaint with the Judicial Magistrate. The court then issues a summons, followed by legal proceedings."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by individuals to send notices and recover funds seamlessly."
                    reviews={[
                        {
                            name: "Manoj T.",
                            role: "Supplier",
                            company: "Retail Goods",
                            rating: 5,
                            initials: "MT",
                            text: "A vendor delayed payment with a bounced cheque. Vyombiz drafted a strict notice, and the vendor cleared the dues within 5 days of receiving it."
                        },
                        {
                            name: "Aditi S.",
                            role: "Freelancer",
                            company: "Consulting",
                            rating: 5,
                            initials: "AS",
                            text: "My client's cheque bounced and they stopped responding. The legal notice from an expert lawyer here made them take it seriously and pay up."
                        },
                        {
                            name: "Vikram R.",
                            role: "Business Owner",
                            company: "Exports Ltd",
                            rating: 4.8,
                            initials: "VR",
                            text: "Very professional and timely. Ensuring the 30-day timeline was met flawlessly saved my case."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ChequeBounceNotice;
