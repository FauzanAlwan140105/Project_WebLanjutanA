import { Link } from 'react-router-dom';

const EmployerDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
        Employer Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start hover:scale-105 transition-transform duration-200 border border-gray-100">
          <div className="mb-4 flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Post a Job</h2>
          <p className="text-gray-600 mb-6">Create a new job posting</p>
          <Link
            to="/employer/jobs"
            className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Post Job
          </Link>
        </div>
        <div className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start hover:scale-105 transition-transform duration-200 border border-gray-100">
          <div className="mb-4 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">View Applications</h2>
          <p className="text-gray-600 mb-6">Manage job applications</p>
          <Link
            to="/employer/applications"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            View Applications
          </Link>
        </div>
        <div className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start hover:scale-105 transition-transform duration-200 border border-gray-100">
          <div className="mb-4 flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Company Profile</h2>
          <p className="text-gray-600 mb-6">Update company information</p>
          <Link
            to="/employer/profile"
            className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;