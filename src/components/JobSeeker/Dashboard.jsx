import { Link } from 'react-router-dom';

const JobSeekerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Seeker Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Browse Jobs</h2>
            <p>Find your next career opportunity</p>
            <div className="card-actions justify-end">
              <Link to="/jobs" className="btn btn-primary">View Jobs</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Your Profile</h2>
            <p>Update your profile information</p>
            <div className="card-actions justify-end">
              <Link to="/profile" className="btn btn-secondary">Edit Profile</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Applications</h2>
            <p>View your job applications</p>
            <div className="card-actions justify-end">
              <Link to="/applications" className="btn btn-accent">View Applications</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;