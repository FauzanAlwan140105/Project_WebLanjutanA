import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, logoutUser } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      // Demo Job Seeker
      if (credentials.email === "demo@jobseeker.com") {
        const demoUser = {
          id: "demo-jobseeker",
          name: "Demo Job Seeker",
          email: "demo@jobseeker.com",
          role: "jobseeker",
          skills: ["React", "JavaScript", "HTML/CSS"],
          token: "demo-token-jobseeker"
        };
        setUser(demoUser);
        localStorage.setItem('user', JSON.stringify(demoUser));
        navigate('/jobseeker/dashboard');
        return;
      }

      // Demo Employer
      if (credentials.email === "demo@employer.com") {
        const demoUser = {
          id: "demo-employer",
          name: "Demo Employer",
          email: "demo@employer.com",
          role: "employer",
          company: "Tech Corp Inc",
          token: "demo-token-employer"
        };
        setUser(demoUser);
        localStorage.setItem('user', JSON.stringify(demoUser));
        navigate('/employer/dashboard');
        return;
      }

      // Normal login
      const userData = await loginUser(credentials);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate(userData.role === 'employer' ? '/employer/dashboard' : '/jobseeker/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userInfo) => {
    try {
      setLoading(true);
      setError(null);
      const userData = await registerUser(userInfo);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate(userData.role === 'employer' ? '/employer/dashboard' : '/jobseeker/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser(); // jika ada logic logout di server
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
