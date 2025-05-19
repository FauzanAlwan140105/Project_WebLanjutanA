import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
    education: '',
    resume: null,
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        skills: user.skills?.join(', ') || '',
        experience: user.experience || '',
        education: user.education || '',
        resume: null,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', profileData);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 py-8 px-2">
      <section className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-tight text-center">
          Your Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={profileData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none"
                value={profileData.email}
                onChange={handleChange}
                required
                disabled
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="skills">
                Skills <span className="text-gray-400 text-sm">(comma separated)</span>
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white"
                value={profileData.skills}
                onChange={handleChange}
                placeholder="e.g. JavaScript, React, Node.js"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="resume">
                Upload Resume <span className="text-gray-400 text-sm">(PDF)</span>
              </label>
              <input
                type="file"
                className="w-full file:rounded-xl file:bg-indigo-600 file:text-white file:px-4 file:py-2 file:font-semibold file:border-0 file:mr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                accept=".pdf"
                onChange={handleFileChange}
                id="resume"
              />
              {profileData.resume && (
                <p className="text-sm text-gray-600 mt-1 truncate">
                  Selected: {profileData.resume.name}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="experience">
                Experience
              </label>
              <textarea
                name="experience"
                id="experience"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white min-h-[90px]"
                value={profileData.experience}
                onChange={handleChange}
                placeholder="Describe your work experience"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="education">
                Education
              </label>
              <textarea
                name="education"
                id="education"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white min-h-[90px]"
                value={profileData.education}
                onChange={handleChange}
                placeholder="Describe your education background"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-10 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow transition"
            >
              Update Profile
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;