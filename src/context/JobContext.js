// src/context/JobContext.js
import { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data pekerjaan
  const fetchJobs = async () => {
    try {
      setLoading(true);
      // Contoh data dummy, ganti dengan API call sebenarnya
      const dummyJobs = [
        { id: 1, title: 'Frontend Developer', company: 'Tech Corp' },
        { id: 2, title: 'Backend Engineer', company: 'Data Inc' }
      ];
      setJobs(dummyJobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, loading, error, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);