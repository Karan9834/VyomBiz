import fs from 'fs';

const file = 'd:/New folder/VyomBiz/src/constants/litigation-content.js';
let content = fs.readFileSync(file, 'utf8');

const automobileNew = `    "automobile-consumer-complaint": {
        title: "Automobile Consumer Complaint",
        hero: {
            mainTitle: "Facing Issues With Your Car, Bike, or Vehicle Purchase?",
            bulletPoints: [
                "Legal Consultation",
                "Complaint Drafting",
                "Consumer Court Filing",
                "Compensation Claims"
            ],
            testimonial: {
                text: "I was sold a defective car and the dealer refused to fix it. VyomBiz helped me file a complaint and I got a full refund.",
                author: "Rahul Sharma",
                verified: true,
                avatar: "https://i.pravatar.cc/150?u=rahul"
            }
        },
        tabs: [
            { id: "overview", label: "Overview" },
            { id: "types", label: "Types" },
            { id: "when-to-file", label: "When To File" },
            { id: "process", label: "Process" },
            { id: "why-choose", label: "Why Choose VyomBiz" },
            { id: "faqs", label: "FAQs" }
        ],
        sections: {
            overview: {
                title: "Automobile Consumer Complaint – Protect Your Consumer Rights",
                image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                content: [
                    "Defective vehicles, hidden charges, delayed delivery, or warranty denial can turn your dream purchase into a frustrating experience.",
                    "Get professional legal assistance to file a Consumer Complaint against automobile manufacturers, dealers, or service centers and claim compensation quickly.",
                    "With Vyombiz managed by Clink Consultancy Services Private Limited, experienced legal professionals help you protect your consumer rights and resolve automobile disputes efficiently.",
                    "Buying a vehicle is a major financial investment. When manufacturers or dealers fail to deliver promised quality, services, or warranties, consumers have the legal right to file a complaint under the Consumer Protection Act.",
                    "Automobile disputes may arise due to defective vehicles, misleading advertisements, poor after-sales service, warranty denial, or unfair trade practices. Filing a consumer complaint ensures that the responsible party is legally accountable.",
                    "This process enables consumers to demand refunds, replacement of defective vehicles, repair services, and compensation for financial loss and mental harassment."
                ]
            },
            types: {
                title: "Common Automobile Consumer Complaints",
                introduction: "Consumers often face several issues while purchasing or maintaining vehicles. Some of the most common automobile disputes include:",
                items: [
                    {
                        title: "Defective Vehicles",
                        description: "Vehicles delivered with manufacturing defects, repeated breakdowns, or safety issues.",
                        example: ""
                    },
                    {
                        title: "Warranty Refusal",
                        description: "Dealers or manufacturers refusing to honor warranty coverage or service commitments.",
                        example: ""
                    },
                    {
                        title: "Delayed Delivery",
                        description: "Customers facing unreasonable delays in vehicle delivery after full payment.",
                        example: ""
                    },
                    {
                        title: "Hidden Charges",
                        description: "Unexpected costs added during purchase or servicing without prior disclosure.",
                        example: ""
                    },
                    {
                        title: "Poor After-Sales Service",
                        description: "Service centers failing to resolve issues or providing substandard repair services.",
                        example: ""
                    },
                    {
                        title: "Misleading Advertisements",
                        description: "False claims regarding mileage, features, safety standards, or performance.",
                        example: ""
                    }
                ]
            },
            whenToFile: {
                title: "Why File & Documents Required",
                content: "Any consumer who has purchased a vehicle or related service can file a complaint. Documents required to successfully file your complaint include:",
                parameters: [
                    {
                        title: "Vehicle & Warranty Documents",
                        desc: "Vehicle purchase invoice and warranty documents."
                    },
                    {
                        title: "Service Records",
                        desc: "Service records and communication with the dealer or manufacturer."
                    },
                    {
                        title: "Payment Receipts",
                        desc: "Payment receipts and insurance documents (if applicable)."
                    },
                    {
                        title: "Evidence",
                        desc: "Photographs or evidence of defects."
                    }
                ],
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            process: {
                title: "Step-by-Step Process to File",
                introduction: "The complaint process becomes structured, legally valid, and faster with our support.",
                steps: [
                    {
                        title: "Legal Case Evaluation",
                        description: "Experts analyze the issue and review supporting documents to understand the dispute."
                    },
                    {
                        title: "Drafting the Complaint",
                        description: "A legally structured complaint is prepared highlighting the defect, loss, and compensation claim."
                    },
                    {
                        title: "Filing Before Consumer Court",
                        description: "The complaint is submitted to the appropriate Consumer Commission based on the claim amount."
                    },
                    {
                        title: "Legal Notice to Opposite Party",
                        description: "Manufacturers, dealers, or service centers receive formal legal notice regarding the complaint."
                    },
                    {
                        title: "Hearing and Resolution",
                        description: "The consumer court reviews the case and provides appropriate orders including compensation or replacement."
                    }
                ]
            },
            whyChoose: {
                title: "Why Choose Vyombiz?",
                reasons: [
                    "Experienced legal professionals handling your case",
                    "Accurate legal complaint drafting and proper documentation",
                    "Fast assistance with consumer court filing",
                    "End-to-end support for faster dispute resolution",
                    "Transparent, structured process to ensure higher chances of success"
                ]
            },
            faqs: {
                title: "Frequently Asked Questions (FAQs)",
                items: [
                    {
                        question: "What is an automobile consumer complaint?",
                        answer: "An automobile consumer complaint is a legal case filed against a vehicle manufacturer, dealer, or service provider for defects, warranty issues, poor service, or unfair trade practices."
                    },
                    {
                        question: "Can I file a complaint for a defective car or bike?",
                        answer: "Yes. Consumers can file complaints for manufacturing defects, repeated breakdowns, or failure to meet promised standards."
                    },
                    {
                        question: "How long does the consumer complaint process take?",
                        answer: "The duration varies depending on the complexity of the case and court proceedings, but filing a properly drafted complaint helps speed up the process."
                    },
                    {
                        question: "Can I claim compensation for mental harassment?",
                        answer: "Yes. Consumers may claim compensation for financial losses as well as mental harassment caused by defective products or poor service."
                    },
                    {
                        question: "Do I need a lawyer to file a consumer complaint?",
                        answer: "Although it is possible to file independently, professional legal assistance improves documentation quality and increases the chances of successful resolution."
                    }
                ]
            }
        }
    }`;

const courierNew = `    "courier-logistics-consumer-complaint": {
        title: "Courier & Logistics Consumer Complaint",
        hero: {
            mainTitle: "Courier Delay, Lost Parcel, or Damaged Delivery?",
            bulletPoints: [
                "Legal Notice to Courier Company",
                "Consumer Complaint Filing",
                "Compensation & Refund Claims",
                "Lawyer-Guided Legal Support"
            ],
            testimonial: {
                text: "The courier company lost my expensive package and offered a meager compensation. VyomBiz helped me fight for the full value and I got it.",
                author: "Vikram Malhotra",
                verified: true,
                avatar: "https://i.pravatar.cc/150?u=vikram"
            }
        },
        tabs: [
            { id: "overview", label: "Overview" },
            { id: "types", label: "Types" },
            { id: "when-to-file", label: "When To File" },
            { id: "process", label: "Process" },
            { id: "why-choose", label: "Why Choose VyomBiz" },
            { id: "faqs", label: "FAQs" }
        ],
        sections: {
            overview: {
                title: "Courier & Logistics Consumer Complaints in India",
                image: "https://images.unsplash.com/photo-1566576912906-2531d013e9ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                content: [
                    "Facing issues with a courier company that lost your package, delayed delivery, or delivered damaged goods? Our legal experts help you file a consumer complaint against courier and logistics companies quickly and effectively.",
                    "Courier and logistics services are essential for businesses and individuals. However, many consumers face serious issues such as lost parcels, damaged shipments, delivery fraud, or unreasonable delays.",
                    "Under the Consumer Protection Act, customers have the legal right to seek compensation if a courier company fails to provide the promised service.",
                    "When courier services neglect their responsibility, consumers can file a formal complaint in the consumer court to demand compensation or corrective action.",
                    "Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses can get professional legal support to file complaints against courier companies and resolve disputes efficiently."
                ]
            },
            types: {
                title: "Common Courier & Logistics Issues",
                introduction: "Many courier complaints arise due to negligence, poor service management, or lack of accountability. Most common issues include:",
                items: [
                    {
                        title: "Lost Shipment",
                        description: "Your parcel never reaches the destination, and the courier company fails to provide a clear explanation or compensation.",
                        example: ""
                    },
                    {
                        title: "Damaged Package",
                        description: "Items arrive broken or damaged due to improper handling during transit.",
                        example: ""
                    },
                    {
                        title: "Delivery Delays",
                        description: "Unreasonable delays in delivery despite promised timelines.",
                        example: ""
                    },
                    {
                        title: "Fake Delivery Status",
                        description: "Shipment marked as delivered but never actually received.",
                        example: ""
                    },
                    {
                        title: "Wrong Delivery",
                        description: "Packages delivered to the wrong address or person.",
                        example: ""
                    },
                    {
                        title: "Refund Refusal",
                        description: "Courier companies refusing to compensate for lost or damaged shipments.",
                        example: ""
                    }
                ]
            },
            whenToFile: {
                title: "Legal Rights & Documents Required",
                content: "When you face lost parcels or delivery fraud, filing a consumer complaint is the best legal remedy. Key documents required to support your case include:",
                parameters: [
                    {
                        title: "Booking Proof",
                        desc: "Courier receipt or booking invoice and tracking details or shipment ID."
                    },
                    {
                        title: "Delivery Proof",
                        desc: "Proof of delivery status (if available) and photos of damaged goods."
                    },
                    {
                        title: "Communication Records",
                        desc: "Written communication with the courier company."
                    },
                    {
                        title: "Identify Proof",
                        desc: "Identity proof of the complainant."
                    }
                ],
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            process: {
                title: "How Vyombiz Helps You File a Courier Complaint",
                introduction: "Professional assistance ensures that your complaint is filed properly and supported with strong legal documentation.",
                steps: [
                    {
                        title: "Case Evaluation",
                        description: "Our legal experts analyze your courier dispute and determine the best legal approach."
                    },
                    {
                        title: "Legal Notice Preparation",
                        description: "A formal legal notice is drafted and sent to the courier company demanding resolution."
                    },
                    {
                        title: "Consumer Complaint Filing",
                        description: "If the issue is unresolved, a consumer complaint is filed before the appropriate consumer forum."
                    },
                    {
                        title: "Legal Representation",
                        description: "Our lawyers assist you throughout the process until the dispute is resolved."
                    }
                ]
            },
            whyChoose: {
                title: "Why Choose Vyombiz for Courier Complaint Filing",
                reasons: [
                    "Experienced Legal Experts: Work with professionals experienced in consumer dispute cases.",
                    "Simple Online Process: File your complaint without complicated legal procedures.",
                    "Transparent Support: Clear guidance throughout the complaint process.",
                    "Faster Case Handling: Structured approach for efficient dispute resolution.",
                    "Financial Compensation: Support to recover losses caused by damaged or lost shipments."
                ]
            },
            faqs: {
                title: "Frequently Asked Questions (FAQs)",
                items: [
                    {
                        question: "Can I file a complaint for a lost courier package?",
                        answer: "Yes. If a courier company loses your parcel and fails to compensate you, you can file a consumer complaint seeking compensation."
                    },
                    {
                        question: "What compensation can I claim for damaged goods?",
                        answer: "Compensation may include the value of damaged goods, courier charges, and additional losses depending on the case."
                    },
                    {
                        question: "Is it necessary to send a legal notice before filing a complaint?",
                        answer: "In many cases, sending a legal notice helps resolve the issue faster. If ignored, the matter can proceed to consumer court."
                    },
                    {
                        question: "How long does a courier complaint case take?",
                        answer: "The timeline varies depending on the complexity of the case and the consumer forum handling it."
                    },
                    {
                        question: "Can businesses file complaints against courier companies?",
                        answer: "Yes. Both individuals and businesses can file consumer complaints for courier service deficiencies."
                    }
                ]
            }
        }
    }`;

const educationNew = `    "education-consumer-complaint": {
        title: "Education Consumer Complaint",
        hero: {
            mainTitle: "Facing Issues with an Educational Institution?",
            bulletPoints: [
                "Legal Consultation",
                "Consumer Complaint Drafting",
                "Representation & Case Support"
            ],
            testimonial: {
                text: "The college refused to refund my fees after I withdrew admission. VyomBiz team helped me send a legal notice and I got my refund within weeks.",
                author: "Sneha Gupta",
                verified: true,
                avatar: "https://i.pravatar.cc/150?u=sneha"
            }
        },
        tabs: [
            { id: "overview", label: "Overview" },
            { id: "types", label: "Types" },
            { id: "when-to-file", label: "When To File" },
            { id: "process", label: "Process" },
            { id: "why-choose", label: "Why Choose VyomBiz" },
            { id: "faqs", label: "FAQs" }
        ],
        sections: {
            overview: {
                title: "Education Consumer Complaints",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                content: [
                    "Protect your rights as a student or parent. File a consumer complaint against unfair practices in education with expert legal assistance.",
                    "Get professional guidance to resolve disputes with schools, colleges, coaching institutes, or online learning platforms.",
                    "Education is one of the most important investments individuals and families make for the future. However, many students and parents often face unfair practices, misleading promises, hidden charges, or poor educational services from institutions.",
                    "Under consumer protection laws, students and parents can raise complaints against educational service providers when they fail to deliver the services they promised.",
                    "Vyombiz managed by Clink Consultancy Services Private Limited helps students and parents understand their legal rights and take appropriate action against institutions that violate consumer protection regulations.",
                    "With the right legal support, you can challenge unfair practices and seek compensation, refunds, or corrective action from the concerned educational institution."
                ]
            },
            types: {
                title: "Common Education Complaints We Handle",
                introduction: "Many education-related disputes arise due to lack of transparency or failure to provide promised services. Our legal professionals help address various types of complaints, including:",
                items: [
                    {
                        title: "Admission & Fee-Related Disputes",
                        description: "Institutions sometimes charge hidden fees, refuse refunds, or change fee structures without proper notice.",
                        example: ""
                    },
                    {
                        title: "Misleading Advertisements",
                        description: "Coaching institutes or colleges may promise placements, infrastructure, or results that do not match reality.",
                        example: ""
                    },
                    {
                        title: "Poor Quality of Educational Services",
                        description: "Issues such as lack of qualified faculty, inadequate facilities, or cancellation of promised programs.",
                        example: ""
                    },
                    {
                        title: "Refund & Cancellation Issues",
                        description: "Students may face problems when seeking refunds after admission cancellation or course withdrawal.",
                        example: ""
                    },
                    {
                        title: "Certification & Documentation Problems",
                        description: "Institutions sometimes delay or refuse to provide certificates, mark sheets, or course completion documents.",
                        example: ""
                    }
                ]
            },
            whenToFile: {
                title: "When Should You Take Legal Action?",
                content: "If an educational institution fails to respond to complaints or refuses to resolve disputes, legal intervention may become necessary. You should consider filing a consumer complaint if:",
                parameters: [
                    {
                        title: "Admissions & Fees",
                        desc: "Refund requests are denied without valid reason, or excess/unauthorized fees are charged."
                    },
                    {
                        title: "Broken Promises",
                        desc: "The institution fails to deliver promised services or misleading claims were made during admission."
                    },
                    {
                        title: "Withheld Documents",
                        desc: "Certificates or necessary educational documents are withheld."
                    },
                    {
                        title: "Required Documents",
                        desc: "Admission confirmation, fee receipts, course brochures, and communication records."
                    }
                ],
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            process: {
                title: "Legal Process to File an Education Complaint",
                introduction: "Filing a complaint requires a structured legal approach to ensure that the case is properly presented before the consumer forum.",
                steps: [
                    {
                        title: "Case Evaluation",
                        description: "Legal experts review your situation and determine whether the issue qualifies as a consumer dispute."
                    },
                    {
                        title: "Documentation & Evidence",
                        description: "Important documents such as admission receipts, agreements, advertisements, or communication records are gathered."
                    },
                    {
                        title: "Legal Notice",
                        description: "A formal legal notice may be issued to the institution requesting resolution."
                    },
                    {
                        title: "Consumer Forum Filing",
                        description: "If the matter is unresolved, a complaint can be filed before the appropriate consumer forum."
                    },
                    {
                        title: "Legal Representation",
                        description: "The case may proceed through hearings until the dispute is resolved."
                    }
                ]
            },
            whyChoose: {
                title: "Why Choose Vyombiz for Education Consumer Complaints?",
                reasons: [
                    "Clear legal guidance on education disputes",
                    "Assistance with complaint drafting and filing",
                    "Structured documentation support",
                    "Professional legal representation",
                    "Transparent communication throughout the process"
                ]
            },
            faqs: {
                title: "Frequently Asked Questions",
                items: [
                    {
                        question: "How long does it take for a complaint to be resolved?",
                        answer: "The time taken for resolution varies depending on the complexity of the case and the responsiveness of the educational institution. Generally, it can take anywhere from a few weeks to a few months."
                    },
                    {
                        question: "Can I file a complaint against a private coaching center?",
                        answer: "Yes, private coaching centers are considered service providers. If there is a deficiency in service, such as false promises of results or non-refund of fees, you can file a complaint."
                    },
                    {
                        question: "Is it mandatory to hire a lawyer to file an education complaint?",
                        answer: "No, you can file a consumer complaint yourself. However, hiring a lawyer can significantly improve your chances of success, especially in complex cases involving legal arguments."
                    },
                    {
                        question: "Can I get a refund of my fees if I withdraw admission?",
                        answer: "According to UGC guidelines and consumer court rulings, institutions must refund fees if a student withdraws within a specified period. If they refuse, it amounts to unfair trade practice."
                    },
                    {
                        question: "What if the college is not AICTE/UGC approved but claimed to be?",
                        answer: "Misrepresenting accreditation status is a serious fraud. You can file a case for compensation for loss of academic years, mental agony, and refund of all fees paid."
                    }
                ]
            }
        }
    }`;

function replaceSection(fullContent, keyStr, replacementStr) {
    const startIdx = fullContent.indexOf(keyStr);
    if (startIdx === -1) {
        console.log("NOT FOUND", keyStr);
        return fullContent;
    }
    
    // Find the end by tracing braces
    let depth = 0;
    let endIdx = -1;
    let started = false;
    for (let i = startIdx; i < fullContent.length; i++) {
        if (fullContent[i] === '{') {
            depth++;
            started = true;
        } else if (fullContent[i] === '}') {
            depth--;
            if (started && depth === 0) {
                let j = i + 1;
                while (j < fullContent.length && /\\s/.test(fullContent[j])) j++;
                if (fullContent[j] === ',') {
                    endIdx = j + 1;
                } else {
                    endIdx = i + 1;
                }
                break;
            }
        }
    }
    
    if (endIdx !== -1) {
        // find the actual start of the line
        let lineStart = startIdx;
        while (lineStart >= 0 && fullContent[lineStart] !== '\\n') {
            lineStart--;
        }
        return fullContent.substring(0, lineStart + 1) + replacementStr + ',\\n' + fullContent.substring(endIdx);
    }
    return fullContent;
}

content = replaceSection(content, '"automobile-consumer-complaint": {', automobileNew);
content = replaceSection(content, '"courier-logistics-consumer-complaint": {', courierNew);
content = replaceSection(content, '"education-consumer-complaint": {', educationNew);

fs.writeFileSync(file, content, 'utf8');
console.log('Update successful');
