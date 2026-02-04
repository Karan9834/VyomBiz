export const NAV_LINKS = [
    { name: "Startup", path: "/startup", dropdown: true },
    { name: "IP & Trademark ®", path: "/ip-trademark", dropdown: true },
    { name: "Compliance", path: "/compliance", dropdown: true },
    { name: "Regulatory", path: "/regulatory", dropdown: true },
    { name: "Environmental", path: "/environmental", dropdown: true },
];

export const SIDEBAR_LINKS = [
    { name: "About Us", path: "/about" },
    { name: "Learning", path: "/learning" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Publications", path: "/publications" },
    { name: "Partner With Us", path: "/partner" },
    { name: "Media", path: "/media" },
    { name: "Work at vyomBiz", path: "/work-at-vyombiz" },
    { name: "Career", path: "/career" },
    { name: "vyomBiz Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
];

export const MEGA_MENU_DATA = {
    "Startup": {
        left: ["Business Registration", "NGO / Trust", "Global Incorporation", "Industry Setup", "Government Licenses", "Government Registration", "ISO Certifications", "FSSAI & Eating License"],
        right: {
            "Business Registration": ["Company Registration", "LLP Registration", "Public Limited Company Registration", "One Person Company Registration", "Partnership Firm Registration", "Sole Proprietorship Registration", "Nidhi Company Registration", "Producer Company Registration", "Indian Subsidiary Company Registration"],
            "NGO / Trust": ["Trust Registration", "Society Registration", "Section 8 Company", "80G & 12A Registration", "CSR-1 Registration", "DARPAN Registration"],
            "Global Incorporation": ["USA Incorporation", "UK Incorporation", "Singapore Incorporation", "Dubai Company Setup", "Hong Kong Incorporation"],
            "Industry Setup": ["Factory License", "Boiler Registration", "MSME Registration", "NSIC Registration"],
            "Government Licenses": ["Import Export Code", "PSARA License", "Drug License", "APEDA Registration"],
            "Government Registration": ["GST Registration", "Professional Tax", "Shop & Establishment", "ESI & PF Registration"],
            "ISO Certifications": ["ISO 9001:2015", "ISO 14001", "ISO 27001", "ISO 22000"],
            "FSSAI & Eating License": ["Basic FSSAI", "State FSSAI", "Central FSSAI", "Eating House License", "Liquor License"]
        }
    },
    "IP & Trademark ®": {
        left: ["Trademarks India", "TM Watch", "International TM", "Designs", "Copyright", "Patent", "Advisory"],
        right: {
            "Trademarks India": ["Trademark Registration", "Trademark Objection", "Trademark Assignment", "Trademark Rectification", "Trademark Renewal", "Trademark Hearing", "Trademark Opposition", "Trademark Search", "Logo Registration"],
            "TM Watch": ["Wordmark Watch", "Device Mark Watch", "Phonetic Watch"],
            "International TM": ["Madrid Protocol", "USA Trademark", "EU Trademark", "China Trademark"],
            "Designs": ["Design Registration", "Design Objection", "Design Renewal"],
            "Copyright": ["Software Copyright", "Literary Work", "Artistic Work", "Music Copyright"],
            "Patent": ["Provisional Patent", "Patent Search", "Patent Filing India", "PCT International Filing"],
            "Advisory": ["IP Strategy", "IP Due Diligence", "Licensing & Franchising"]
        }
    },
    "Compliance": {
        left: ["Company Filing", "LLP Filing", "Audit & Assurance", "Event Based", "Closure"],
        right: {
            "Company Filing": ["ROC Annual Filing", "Director KYC", "Form ADT-1", "DPT-3 Filing", "AOC-4 & MGT-7"],
            "LLP Filing": ["LLP Form 11", "LLP Form 8", "LLP Income Tax Filing"],
            "Audit & Assurance": ["Statutory Audit", "Internal Audit", "Tax Audit", "Stock Audit"],
            "Event Based": ["Change in Director", "Increase in Share Capital", "Change in Office Address", "Transfer of Shares"],
            "Closure": ["Strike Off Company", "Winding Up of LLP", "Dormant Status"]
        }
    },
    "Regulatory": {
        left: ["FDI & FEMA", "RBI Compliance", "SEBI Compliance", "NBFC"],
        right: {
            "FDI & FEMA": ["FC-GPR Filing", "FC-TRS Filing", "FLA Return", "ECB Compliance"],
            "RBI Compliance": ["NBFC Annual Return", "KYC Compliance", "FDI Reporting"],
            "SEBI Compliance": ["Listing Agreements", "Takeover Code", "Insider Trading Compliance"],
            "NBFC": ["NBFC Registration", "Micro Finance License", "Payment Gateway License"]
        }
    },
    "Environmental": {
        left: ["Pollution NOC", "Waste Management", "EPR Registration"],
        right: {
            "Pollution NOC": ["CTE (Consent to Establish)", "CTO (Consent to Operate)", "Pollution Certificate for Industry"],
            "Waste Management": ["Hazardous Waste", "E-Waste Management", "Plastic Waste", "Bio-Medical Waste"],
            "EPR Registration": ["EPR for Plastic", "EPR for E-waste", "EPR for Battery", "EPR for Tyres"]
        }
    }
};
