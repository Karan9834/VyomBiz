import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiExternalLink, FiBriefcase, FiMapPin } from "react-icons/fi";

const jobData = [
  {
    title: "PHP Laravel Developer",
    openings: 2,
    location: "Noida",
    skills:
      "Laravel, API, Core PHP, PHP-7, HTML5, CSS3, web services, Javascript, Codeigniter Framework, MySql",
  },
  {
    title: "Project Coordinator",
    openings: 2,
    location: "Noida",
    skills:
      "Proficient in MS Office Suite, Jira, Trello, Asana, Confluence, and MS Project with knowledge of Agile/Scrum methodologies, project scheduling, reporting, and documentation management.",
  },
  {
    title: "BDM BIS Sales",
    openings: 3,
    location: "Noida-Sector 60",
    skills:
      "CRM (Zoho/HubSpot/Freshsales), BIS/ISI/CRS/FMCS Process Management, Documentation & Portal Handling, Testing Lab Coordination, MS Office, Google Workspace, Virtual Demo Tools, and Compliance Advisory.",
  },
  {
    title: "Trademark Sales",
    openings: 2,
    location: "Noida Sector 60",
    skills:
      "CRM (Zoho/HubSpot/Freshsales), Google Workspace, Dialer Tools, Trademark Processes (TM-A, TM-M, Objections, Oppositions), and Proposal Management.",
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We foster a culture of innovation, collaboration, and continuous
            learning. Our team thrives on challenges and celebrates success
            together. We provide opportunities for professional development,
            leadership growth, and meaningful work that makes a difference.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600 mt-2">Team Members</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600 mt-2">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOB LISTING SECTION ================= */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto space-y-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Current Openings
          </h2>

          {jobData.map((job, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-start shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* LEFT CONTENT */}
              <div className="flex-1">
                {/* Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                    <FiUser size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                </div>

                {/* Openings + Location */}
                <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <FiBriefcase />
                    <span>
                      <span className="font-medium text-gray-700">
                        Openings:
                      </span>{" "}
                      <span className="text-blue-600 font-semibold">
                        {job.openings}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>
                      <span className="font-medium text-gray-700">
                        Location:
                      </span>{" "}
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-800">
                    Required Skills:
                  </span>{" "}
                  <span className="text-blue-600">{job.skills}</span>
                </p>
              </div>

              {/* RIGHT BUTTON */}
              <div className="mt-6 md:mt-0 md:ml-6 flex items-center">
                <button
                  onClick={() => navigate('/pending', { state: { title: 'Career Application' } })}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-md flex items-center gap-2 transition"
                >
                  Apply Now
                  <FiExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Careers;
