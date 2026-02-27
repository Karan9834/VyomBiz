import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import PageTemplate from '../../components/common/PageTemplate';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract a readable name from the pathname or use state
  const pathName = location.pathname.split('/').pop().replace(/-/g, ' ');
  const title = location.state?.title || (pathName ? pathName.charAt(0).toUpperCase() + pathName.slice(1) : "This Page");

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-slate-100">
        <div className="w-20 h-20 bg-blue-50 text-[#005a9c] rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10" strokeWidth={2} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-4">
          Coming Soon
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          The <strong>{title}</strong> content is currently under development. We're working hard to bring you comprehensive information on this topic very soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#072b47] text-[#072b47] rounded-xl font-semibold hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#FFE90A] text-[#072b47] rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-[#FFE90A]/90 transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
