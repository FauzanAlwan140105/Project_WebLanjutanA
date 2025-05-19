import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getJobById, applyForJob } from '../../services/jobs';
import Loading from '../Common/Loading';

const JobDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicationLoading, setApplicationLoading] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await getJobById(id);
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  const handleApply = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    try {
      setApplicationLoading(true);
      await applyForJob(id, resume);
      // Show success message or redirect
      navigate('/jobseeker/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setApplicationLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Job Details</h1>
        <Link to="/jobs" className="btn btn-ghost">
          Back to Jobs
        </Link>
      </div>
      
      {error && (
        <div className="alert alert-error mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
      
      {job && (
        <div className="bg-base-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <p className="text-lg">{job.company} • {job.location}</p>
                <div className="badge badge-primary mt-2">{job.type}</div>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">${job.salaryRange?.min} - ${job.salaryRange?.max}</p>
                <p className="text-sm text-gray-500">Posted: {new Date(job.postedAt).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Job Description</h3>
              <p className="whitespace-pre-line">{job.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <ul className="list-disc pl-5">
                {job.requirements?.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills?.map((skill, index) => (
                  <div key={index} className="badge badge-outline">{skill}</div>
                ))}
              </div>
            </div>
            
            {user?.role === 'jobseeker' && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Apply for this position</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upload Resume (PDF)</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
                <button
                  onClick={handleApply}
                  disabled={applicationLoading}
                  className="btn btn-primary mt-4"
                >
                  {applicationLoading ? 'Applying...' : 'Apply Now'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;