import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../../services/jobs';
import Loading from '../Common/Loading';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    type: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getJobs(filters);
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>
      
      {/* Filter Section */}
      <div className="bg-base-200 p-4 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Filter by title"
              className="input input-bordered"
              value={filters.title}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Filter by location"
              className="input input-bordered"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="type"
              className="select select-bordered"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Error Handling */}
      {error && (
        <div className="alert alert-error mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error: {error}</span>
        </div>
      )}
      
      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{job.title}</h2>
              <div className="badge badge-primary">{job.type}</div>
              <p className="text-gray-500">{job.company} • {job.location}</p>
              <p className="mt-2 line-clamp-2">{job.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/jobs/${job.id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {jobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-xl">No jobs found matching your criteria.</p>
          <button 
            onClick={() => setFilters({ title: '', location: '', type: '' })}
            className="btn btn-ghost mt-4"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;