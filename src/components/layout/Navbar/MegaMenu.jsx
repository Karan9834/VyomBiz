import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const getLinkPath = (link, categoryPath) => {
    const routeMap = {
        "Company Registration": "/company-registration",
        "LLP Registration": "/llp-registration",
        "Public Limited Company Registration": "/public-limited-registration",
        "One Person Company Registration": "/one-person-company-registration",
        "Partnership Firm Registration": "/partnership-firm-registration",
        "Sole Proprietorship Registration": "/sole-proprietorship-registration",
        "Nidhi Company Registration": "/nidhi-company-registration",
        "Producer Company Registration": "/producer-company-registration",
        "Indian Subsidiary Company Registration": "/indian-subsidiary-company-registration",

        // NGO Routes
        "NGO Registration": "/ngo-registration",
        "Trust Registration": "/trust-registration",
        "FCRA Registration": "/fcra-registration",
        "Society Registration": "/society-registration",
        "12AA Registration": "/12aa-registration",
        "12AB Registration": "/12ab-registration",
        "Section 8 Company Registration": "/section-8-company",
        "80G Registration": "/80g-registration",
        "80G and 12A Registration": "/80g-12a-registration",
        "NGO CSR-1 Filing": "/csr-1-registration",
        "NGO Darpan Registration": "/darpan-registration",
        "NGO CSR Consultancy": "/ngo-csr-consultancy",
        "NGO Income Tax Advisory": "/ngo-income-tax-advisory",
        "NGO Project Report": "/ngo-project-report",
        "NGO Accounting": "/ngo-accounting",
        "Strike Off Section 8 Companies": "/strike-off-section-8-company",
        "Trust Annual Compliance": "/trust-annual-compliance",

        // Global
        "Company Registration USA": "/usa-incorporation",
        "Company Registration UK": "/uk-incorporation",
        "Company Registration Singapore": "/singapore-incorporation",
        "Company Registration Mauritius": "/company-registration-mauritius",
        "Company Registration Dubai": "/dubai-company-setup",
        "Company Registration Hong Kong": "/hong-kong-incorporation",
        "Company Registration New Zealand": "/new-zealand-incorporation",
        "Company Registration Australia": "/australia-incorporation",
        "Company Registration Canada": "/canada-incorporation",
        "Company Registration Russia": "/russia-incorporation",
        "Company Registration Poland": "/poland-incorporation",
        "Company Registration Japan": "/japan-incorporation",
        "Company Registration Germany": "/germany-incorporation",
        "Company Registration France": "/france-incorporation",
        "Company Registration South Africa": "/south-africa-incorporation",

        // IP & Trademark
        "Trademark Registration": "/trademark-registration",
        "Trademark Watch Services": "/trademark-watch-services",
        "International Trademark Registration": "/international-trademark-registration",
        "Design Registration": "/design-registration",
        "Registration OF Geographical Indication (GI)": "/gi-registration",
        "Copyright Registration": "/copyright-registration",
        "Patent Registration": "/patent-registration",
        // Advisory
        "Patent Due Diligence": "/patent-due-diligence",

        // Industry
        "Factory License": "/factory-license",
        "Boiler Registration": "/boiler-registration",
        "MSME Registration": "/msme-registration",
        "NSIC Registration": "/nsic-registration",

        // Government
        "Import Export Code": "/import-export-code",
        "PSARA License": "/psara-license",
        "Drug License": "/drug-license",
        "APEDA Registration": "/apeda-registration",
        "GST Registration": "/gst-registration",
        "Professional Tax": "/professional-tax",
        "Shop & Establishment": "/shop-establishment",
        "ESI & PF Registration": "/esi-pf-registration",

        // ISO
        "ISO Registration": "/iso-registration",
        "ISO 14001 EMS": "/iso-14001-ems",
        "ISO 22000 FSMS": "/iso-22000-fsms",
        "ISO 9001 2015": "/iso-9001-2015",
        "ISO 50001 Energy Management": "/iso-50001-energy-management",
        "ISO 45001 certification": "/iso-45001-certification",
        "ISO 20000 Certification": "/iso-20000-certification",
        "ISO 31000 Certification": "/iso-31000-certification",
        "ISO 13485 Certification": "/iso-13485-certification",
        "ISO 21101:2014 Certification": "/iso-21101-2014-certification",
        "ISO 37001:2016 Certification": "/iso-37001-2016-certification",
        "ISO 27001 ISMS Certification": "/iso-27001-isms",
        "ISO 16001 Certification": "/iso-16001-certification",
        "ISO 39001 Certification": "/iso-39001-certification",
        "ISO 2768-1 Certification": "/iso-2768-1-certification",

        // FSSAI
        "Basic FSSAI": "/basic-fssai",
        "State FSSAI": "/state-fssai",
        "Central FSSAI": "/central-fssai",
        "Eating House License": "/eating-house-license",
        "Liquor License": "/liquor-license",
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

        // FSSAI & Eating House
        "FSSAI License": "/fssai-license",
        "FSSAI License Renewal": "/fssai-license-renewal",
        "FSSAI State License": "/fssai-state-license",
        "Central FSSAI License": "/central-fssai-license",
        "FSSAI Annual Return": "/fssai-annual-return",
        "FSSAI Product Approval": "/fssai-product-approval",
        "Food Recycling License": "/food-recycling-license",
        "FPO Mark Certification": "/fpo-mark-certification",

        // Compliance - Secretarial
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

        // Company
        "Career": "/career",
        "vyomBiz Reviews": "/reviews",
        "Work at vyomBiz": "/work-at-vyombiz"
    };

    return routeMap[link] || (categoryPath || "/");
};

const MegaMenu = ({ data, activeSub, setActiveSub, onItemClick, categoryPath }) => {
    if (!data) return null;

    return (
        <div
            className="hidden xl:block absolute top-[68px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] bg-white rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 border border-slate-200 z-30 shadow-[0_20px_40px_-15px_rgba(34,197,94,0.25)]"
        >
            <div className="grid grid-cols-[330px_1fr] h-[500px]">
                {/* Left Sidebar Category List */}
                <div className="bg-white p-6 border-r border-slate-100 overflow-y-auto h-full custom-scrollbar">
                    {data.left.map(sub => (
                        <div key={sub}
                            onMouseEnter={() => setActiveSub(sub)}
                            className={`flex justify-between items-center px-5 py-3 mb-1.5 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${activeSub === sub
                                ? "bg-[#f1a134] text-white shadow-lg shadow-orange-100"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#072b47]"
                                }`}>
                            {sub} <ChevronRight size={16} className={`${activeSub === sub ? "text-white" : "text-slate-400"}`} />
                        </div>
                    ))}
                </div>

                {/* Right Side Content Grid */}
                <div className="p-12 bg-slate-50/40 h-full overflow-y-auto custom-scrollbar">
                    <h3 className="text-2xl font-black mb-8 text-[#072b47] tracking-tight">
                        {activeSub}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
                        {(data.right[activeSub] || []).map(link => (
                            <Link
                                key={link}
                                to={getLinkPath(link, categoryPath)}
                                onClick={onItemClick}
                                className="group cursor-pointer block"
                            >
                                <span className="text-[15.5px] text-slate-500 group-hover:text-[#f1a134] font-medium transition-colors">
                                    {link}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
