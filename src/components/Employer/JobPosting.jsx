import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { postJob } from '../../services/jobs';
import Loading from '../Common/Loading';

const JobPosting = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: user?.company || '',
    location: '',
    type: 'full-time',
    salaryRange: { min: '', max: '' },
    requirements: [''],
    skills: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSalaryChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      salaryRange: {
        ...jobData.salaryRange,
        [name]: value,
      },
    });
  };

  const handleRequirementChange = (index, value) => {
    const newRequirements = [...jobData.requirements];
    newRequirements[index] = value;
    setJobData({
      ...jobData,
      requirements: newRequirements,
    });
  };

  const addRequirement = () => {
    setJobData({
      ...jobData,
      requirements: [...jobData.requirements, ''],
    });
  };

  const removeRequirement = (index) => {
    const newRequirements = jobData.requirements.filter((_, i) => i !== index);
    setJobData({
      ...jobData,
      requirements: newRequirements,
    });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...jobData.skills];
    newSkills[index] = value;
    setJobData({
      ...jobData,
      skills: newSkills,
    });
  };

  const addSkill = () => {
    setJobData({
      ...jobData,
      skills: [...jobData.skills, ''],
    });
  };

  const removeSkill = (index) => {
    const newSkills = jobData.skills.filter((_, i) => i !== index);
    setJobData({
      ...jobData,
      skills: newSkills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await postJob(jobData);
      setSuccess(true);
      // Reset form
      setJobData({
        title: '',
        description: '',
        company: user?.company || '',
        location: '',
        type: 'full-time',
        salaryRange: { min: '', max: '' },
        requirements: [''],
        skills: [''],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
        Post a New Job
      </h1>
      {error && (
        <div className="flex items-center gap-3 mb-8 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-red-700 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 mb-8 rounded-lg bg-green-100 border border-green-300 px-4 py-3 text-green-700 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Job posted successfully!</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Job Title*</label>
            <input
              type="text"
              name="title"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.title}
              onChange={handleChange}
              required
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Company*</label>
            <input
              type="text"
              name="company"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.company}
              onChange={handleChange}
              required
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location*</label>
            <input
              type="text"
              name="location"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.location}
              onChange={handleChange}
              required
              placeholder="e.g. Jakarta, Remote"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Job Type*</label>
            <select
              name="type"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.type}
              onChange={handleChange}
              required
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Minimum Salary ($)</label>
            <input
              type="number"
              name="min"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.salaryRange.min}
              onChange={handleSalaryChange}
              min={0}
              placeholder="e.g. 2000"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Maximum Salary ($)</label>
            <input
              type="number"
              name="max"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={jobData.salaryRange.max}
              onChange={handleSalaryChange}
              min={0}
              placeholder="e.g. 5000"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-1">Job Description*</label>
          <textarea
            name="description"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[120px]"
            value={jobData.description}
            onChange={handleChange}
            required
            placeholder="Describe the responsibilities, work culture, and perks"
          ></textarea>
        </div>

        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-2">Requirements*</label>
          {jobData.requirements.map((req, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={req}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                required
                placeholder="e.g. At least 2 years experience in React"
              />
              {jobData.requirements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="text-red-500 hover:bg-red-100 rounded-lg px-3 transition"
                  aria-label="Remove requirement"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addRequirement}
            className="text-indigo-600 font-medium hover:underline mt-2"
          >
            + Add Requirement
          </button>
        </div>

        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-2">Skills*</label>
          {jobData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                required
                placeholder="e.g. JavaScript, CSS"
              />
              {jobData.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-500 hover:bg-red-100 rounded-lg px-3 transition"
                  aria-label="Remove skill"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="text-indigo-600 font-medium hover:underline mt-2"
          >
            + Add Skill
          </button>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow transition"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPosting;