import { NAV_LINKS, MEGA_MENU_DATA, SIDEBAR_LINKS } from "../constants/navigation";

export const ROUTE_MAP = {
    // Startup
    "Company Registration": "/company-registration",
    "LLP Registration": "/llp-registration",
    "Public Limited Company Registration": "/public-limited-registration",
    "One Person Company Registration": "/one-person-company-registration",
    "Partnership Firm Registration": "/partnership-firm-registration",
    "Sole Proprietorship Registration": "/sole-proprietorship-registration",
    "Nidhi Company Registration": "/nidhi-company-registration",
    "Producer Company Registration": "/producer-company-registration",
    "Indian Subsidiary Company Registration": "/indian-subsidiary-company-registration",
    "Trust Registration": "/trust-registration",
    "Society Registration": "/society-registration",
    "Section 8 Company Registration": "/section-8-company",
    "80G and 12A Registration": "/80g-12a-registration",
    "NGO CSR-1 Filing": "/csr-1-registration",
    "NGO Darpan Registration": "/darpan-registration",
    "80G Registration": "/80g-registration",
    "Strike Off Section 8 Companies": "/strike-off-section-8-company",
    "Trust Annual Compliance": "/trust-annual-compliance",
    "NGO Registration": "/ngo-registration",
    "FCRA Registration": "/fcra-registration",
    "12AA Registration": "/12aa-registration",
    "12AB Registration": "/12ab-registration",
    "NGO CSR Consultancy": "/ngo-csr-consultancy",
    "NGO Income Tax Advisory": "/ngo-income-tax-advisory",
    "NGO Accounting": "/ngo-accounting",
    "NGO Project Report": "/ngo-project-report",

    // Global Incorporation
    "Company Registration USA": "/usa-incorporation",
    "Company Registration UK": "/uk-incorporation",
    "Company Registration Dubai": "/dubai-company-setup",
    "Company Registration Mauritius": "/company-registration-mauritius",
    "Company Registration Hong Kong": "/hong-kong-incorporation",
    "Company Registration Singapore": "/singapore-incorporation",
    "Company Registration New Zealand": "/new-zealand-incorporation",
    "Company Registration Australia": "/australia-incorporation",
    "Company Registration Canada": "/canada-incorporation",
    "Company Registration Russia": "/russia-incorporation",
    "Company Registration Poland": "/poland-incorporation",
    "Company Registration Japan": "/japan-incorporation",
    "Company Registration Germany": "/germany-incorporation",
    "Company Registration France": "/france-incorporation",
    "Company Registration South Africa": "/south-africa-incorporation",

    // Industry Setup
    "Clinical Establishment Registration": "/clinical-establishment-registration",
    "Carbon Black Manufacturing": "/carbon-black-manufacturing-business-setup",
    "Green Hydrogen Plant": "/green-hydrogen-plant-setup",
    "Green Ammonia Plant": "/green-ammonia-plant-setup",
    "Synthetic Rubber Business": "/synthetic-rubber-business-setup",
    "Paper and Paperboard Packaging Industry": "/paper-and-paperboard-packaging-industry",
    "Fermentation Industry": "/fermentation-industry-setup",
    "Renewable energy business": "/renewable-energy-business-setup",
    "Fire Equipment Plant Setup": "/fire-equipment-plant-setup",
    "Virtual Office Space": "/virtual-office-space-setup",

    // IP & Trademark
    "Trademark Registration": "/trademark-registration",
    "Trademark Assignment": "/trademark-assignment",
    "Trademark Classes Finder": "/trademark-classes-finder",
    "Trademark Opposition": "/trademark-opposition",
    "Intellectual Property Dispute": "/intellectual-property-dispute",
    "Trademark Watch Services": "/trademark-watch-services",
    "International Trademark Registration": "/international-trademark-registration",
    "Design Registration": "/design-registration",
    "Registration OF Geographical Indication (GI)": "/gi-registration",
    "Copyright Registration": "/copyright-registration",
    "Patent Registration": "/patent-registration",
    "Patent Due Diligence": "/patent-due-diligence",

    // FSSAI & Eating House
    "FSSAI License": "/fssai-license",
    "FSSAI License Renewal": "/fssai-license-renewal",
    "FSSAI State License": "/fssai-state-license",
    "Eating House License": "/eating-house-license",
    "Central FSSAI License": "/central-fssai-license",
    "FSSAI Annual Return": "/fssai-annual-return",
    "FSSAI Product Approval": "/fssai-product-approval",
    "Food Recycling License": "/food-recycling-license",
    "FPO Mark Certification": "/fpo-mark-certification",

    // ISO
    "ISO Registration": "/iso-registration",
    "ISO 37001:2016 Certification": "/iso-37001-2016-certification",
    "ISO 14001 EMS": "/iso-14001-ems",
    "ISO 27001 ISMS Certification": "/iso-27001-isms",
    "ISO 22000 FSMS": "/iso-22000-fsms",
    "ISO 9001 2015": "/iso-9001-2015",
    "ISO 50001 Energy Management": "/iso-50001-energy-management",
    "ISO 45001 certification": "/iso-45001-certification",
    "ISO 20000 Certification": "/iso-20000-certification",
    "ISO 31000 Certification": "/iso-31000-certification",
    "ISO 13485 Certification": "/iso-13485-certification",
    "ISO 21101:2014 Certification": "/iso-21101-2014-certification",
    "ISO 16001 Certification": "/iso-16001-certification",
    "ISO 39001 Certification": "/iso-39001-certification",
    "ISO 2768-1 Certification": "/iso-2768-1-certification",

    // Compliance
    "GST Annual Return Filing": "/gst-annual-return-filing",
    "GST Compliance Services": "/gst-compliance-services",
    "GST Registration": "/gst-registration",
    "Income Tax Return Filing": "/income-tax-return-filing",
    "TDS Return Filing": "/tds-return-filing",
    "Closing a Limited Liability Partnership": "/closing-a-limited-liability-partnership",
    "Annual Filing for LLP": "/annual-filing-for-llp",
    "Change in Object Clause": "/change-in-object-clause",
    "MCA Compliance": "/mca-compliance",
    "Annual Compliance of a Pvt. Ltd. Company": "/annual-compliance-of-a-private-limited-company",
    "Event Based Compliances in a Company": "/event-based-compliances-in-a-company",
    "Change in Name Clause": "/change-in-name-clause",
    "Nidhi Company Compliance": "/nidhi-company-compliance",
    "NBFC Compliance": "/nbfc-compliance",
    "Change in Share Capital": "/change-in-share-capital",
    "Change in LLP Agreement": "/change-in-llp-agreement",
    "AGR-Return Filing": "/agr-return-filing",
    "Form MGT-7": "/form-mgt-7",
    "AGILE PRO S": "/agile-pro-s",
    "Change in Directors": "/change-directors",
    "Winding Up of Private Limited Company": "/winding-up-of-private-limited-company",
    "Appointment and Resignation of Directors": "/appointment-resignation-directors",
    "Change in Registered Office": "/change-registered-office",
    "Form AOC-4": "/form-aoc-4",
    "Liquidation of Company": "/liquidation-company",
    "Removal of Director": "/removal-director",
    "Revival of Struck Off Companies": "/revival-struck-off-companies",
    "SPICE+ Form": "/spice-plus-form",
    "Section 8 Company Compliance": "/section-8-compliance",

    // Lawyer Services
    "Succession Certificate in India": "/succession-certificate-in-india",
    "Section 8-Demand Notice": "/section-8-demand-notice",
    "RERA Complaint": "/rera-complaint",
    "Public Interest Litigation": "/public-interest-litigation",
    "Legal Notice": "/legal-notice",
    "Legal Heir Certificate": "/legal-heir-certificate",
    "Lease Agreement Drafting": "/lease-agreement-drafting",
    "Consumer Complaint": "/consumer-complaint",
    "Automobile": "/consumer-complaint/automobile",
    "Courier Logistics": "/consumer-complaint/courier-logistics",
    "Bank": "/consumer-complaint/bank",
    "E-commerce": "/consumer-complaint/ecommerce",
    "Education": "/consumer-complaint/education",
    "Grievances": "/consumer-complaint/grievances",
    "Travel": "/consumer-complaint/travel",
    "Streaming Platforms": "/consumer-complaint/streaming-platforms",
    "Retail Business": "/consumer-complaint/retail-business",
    "Real Estate": "/consumer-complaint/real-estate",
    "Medical": "/consumer-complaint/medical",
    "IT Companies": "/consumer-complaint/it-companies",
    "Insurance": "/consumer-complaint/insurance",
    "Home Appliances": "/consumer-complaint/home-appliances",
    "Hotels": "/consumer-complaint/hotels",
    "Investment": "/consumer-complaint/investment",
    "Cheque Bounce Notice": "/cheque-bounce-notice",
    "Caveat Petition": "/caveat-petition",
    "Legal Notice for Money Recovery": "/legal-notice-for-money-recovery",
    "Legal Notice Recovery of Dues": "/legal-notice-recovery-of-dues",
    "Legal Notice Under Consumer Protection Act": "/legal-notice-under-consumer-protection-act",

    // Misc
    "About Us": "/about",
    "Media": "/media",
    "Newsletter": "/newsletter",
    "Publications": "/publications",
    "Partner With Us": "/partner",
    "Learning": "/learning",
    "Contact Us": "/contact",
    "Career": "/career",
    "vyomBiz Reviews": "/reviews",
    "Work at vyomBiz": "/work-at-vyombiz"
};

export const LITIGATION_LINKS = [
    "Defamation Complaint", "Intellectual Property Infringement", "Employment Dispute Litigation",
    "Contract Dispute Litigation", "Cheque Bounce Complaint", "Property Litigation",
    "Cyber Crime Litigation", "Mutual Divorce", "Contested Divorce",
    "Restitution of Conjugal Rights", "POSH Compliance", "RERA Complaint", "US Litigation Service"
];

export const getLinkPath = (link, categoryName, subCategoryName) => {
    // 1. Direct Hardcoded Match
    if (ROUTE_MAP[link]) return ROUTE_MAP[link];

    // 2. Litigation Auto-Mapping
    if (LITIGATION_LINKS.includes(link)) {
        return `/${link.toLowerCase().replace(/\s+/g, '-')}`;
    }

    // 3. Lawyer Specialization Auto-Mapping
    if (subCategoryName === "Lawyers Specialization" || link.endsWith("Lawyers")) {
        return `/lawyers-services/${link.toLowerCase().replace(/\s+/g, '-')}`;
    }

    // 4. Fallback search in SIDEBAR_LINKS
    const sidebarMatch = SIDEBAR_LINKS.find(s => s.name === link);
    if (sidebarMatch) return sidebarMatch.path;

    // 5. Intelligent Slug Fallback (New)
    // For Startup, Regulatory, Environmental, etc., if not in map, try slug
    const slug = link.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Check if the slug seems reasonable for a top-level route
    // This covers many Startup links that follow /link-name pattern
    if (categoryName === "Startup" || categoryName === "Regulatory" || categoryName === "Environmental") {
        return `/${slug}`;
    }

    // 6. Final Category Fallback
    const navMatch = NAV_LINKS.find(n => n.name === categoryName);
    return navMatch ? navMatch.path : "/";
};

export const isCategoryActive = (categoryName, currentPath) => {
    const mainLink = NAV_LINKS.find(n => n.name === categoryName);
    if (mainLink && currentPath === mainLink.path) return true;

    const data = MEGA_MENU_DATA[categoryName];
    if (!data) {
        if (categoryName === "Company") {
            return SIDEBAR_LINKS.some(s => s.path === currentPath);
        }
        return false;
    }

    for (const sub of data.left) {
        const links = data.right[sub] || [];
        if (links.some(label => getLinkPath(label, categoryName, sub) === currentPath)) {
            return true;
        }
    }

    if (mainLink && mainLink.path !== "/" && currentPath.startsWith(mainLink.path)) return true;

    return false;
};
