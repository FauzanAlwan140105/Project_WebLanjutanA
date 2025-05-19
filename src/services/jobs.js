import axios from 'axios';

const API_URL = 'http://localhost:3000/api/jobs'; // Sesuaikan dengan URL backend Anda

const getJobs = async (filters = {}) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  
  const response = await axios.get(`${API_URL}?${params.toString()}`);
  return response.data;
};

const getJobById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const postJob = async (jobData) => {
  const response = await axios.post(API_URL, jobData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const applyForJob = async (jobId, resume) => {
  const formData = new FormData();
  formData.append('resume', resume);
  
  const response = await axios.post(`${API_URL}/${jobId}/apply`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export { getJobs, getJobById, postJob, applyForJob };