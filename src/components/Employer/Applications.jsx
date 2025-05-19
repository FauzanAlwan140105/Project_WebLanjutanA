import { useState, useEffect } from 'react';
import Loading from '../Common/Loading';

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Reviewed: 'bg-blue-100 text-blue-800 border-blue-300',
  Accepted: 'bg-green-100 text-green-800 border-green-300',
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchApplications = async () => {
      try {
        setLoading(true);
        // Replace with actual API call
        const mockApplications = [
          {
            id: 1,
            jobTitle: 'Frontend Developer',
            applicantName: 'John Doe',
            status: 'Pending',
            appliedDate: '2023-05-15',
          },
          {
            id: 2,
            jobTitle: 'Backend Developer',
            applicantName: 'Jane Smith',
            status: 'Reviewed',
            appliedDate: '2023-05-10',
          },
        ];
        setApplications(mockApplications);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">Job Applications</h1>
      <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-left text-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 font-semibold text-gray-700">Job Title</th>
              <th className="py-3 px-6 font-semibold text-gray-700">Applicant</th>
              <th className="py-3 px-6 font-semibold text-gray-700">Status</th>
              <th className="py-3 px-6 font-semibold text-gray-700">Applied Date</th>
              <th className="py-3 px-6 font-semibold text-gray-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr
                key={application.id}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-4 px-6">{application.jobTitle}</td>
                <td className="py-4 px-6">{application.applicantName}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full border text-sm font-medium 
                      ${statusStyles[application.status] || 'bg-green-100 text-green-800 border-green-300'}
                    `}
                  >
                    {application.status}
                  </span>
                </td>
                <td className="py-4 px-6">{application.appliedDate}</td>
                <td className="py-4 px-6 text-center space-x-2">
                  <button
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    View
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={5} className="py-10 text-center text-gray-500 text-lg">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;