import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loading from '../Common/Loading';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'jobseeker',
    company: '',
  });
  const { register, loading, error } = useAuth();
  const [showCompany, setShowCompany] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === 'role') {
      setShowCompany(value === 'employer');
      if (value !== 'employer') {
        setUserData((prev) => ({ ...prev, company: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userData);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-2">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-indigo-50 w-1/2 p-10">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">Create Account</h1>
          <p className="text-lg text-gray-600 mb-4 text-center">
            Join our platform as a job seeker or employer.
          </p>
          <svg
            className="mx-auto w-32 h-32 text-indigo-200"
            fill="none"
            viewBox="0 0 96 96"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="15" y="30" width="66" height="36" rx="4" className="stroke-indigo-400" />
            <path d="M25 44h46M25 52h46" className="stroke-indigo-300" strokeWidth="2" />
            <circle cx="32" cy="38" r="2" className="fill-indigo-300" />
            <circle cx="64" cy="58" r="2" className="fill-indigo-300" />
          </svg>
        </div>
        {/* Right Section: Registration Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:hidden">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={userData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={userData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={userData.password}
                onChange={handleChange}
                placeholder="Your password"
                required
                minLength={6}
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 text-gray-700 font-medium">
                Register as
              </label>
              <select
                name="role"
                id="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={userData.role}
                onChange={handleChange}
                required
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            {showCompany && (
              <div>
                <label htmlFor="company" className="block mb-1 text-gray-700 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                  value={userData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required={userData.role === 'employer'}
                />
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-red-100 border border-red-200 text-red-700 text-sm mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow transition"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;