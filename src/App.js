import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import JobSeekerDashboard from './components/JobSeeker/Dashboard';
import EmployerDashboard from './components/Employer/Dashboard';
import JobList from './components/JobSeeker/JobList';
import JobDetail from './components/JobSeeker/JobDetail';
import Profile from './components/JobSeeker/Profile';
import JobPosting from './components/Employer/JobPosting';
import Applications from './components/Employer/Applications';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';


function App() {
  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route element={<ProtectedRoute roles={['jobseeker']} />}>
                  <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
                  <Route path="/jobs" element={<JobList />} />
                  <Route path="/jobs/:id" element={<JobDetail />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
                
                <Route element={<ProtectedRoute roles={['employer']} />}>
                  <Route path="/employer/dashboard" element={<EmployerDashboard />} />
                  <Route path="/employer/jobs" element={<JobPosting />} />
                  <Route path="/employer/applications" element={<Applications />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;