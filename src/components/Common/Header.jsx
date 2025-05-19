import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // For mobile dropdown
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-indigo-700 hover:text-indigo-900 transition"
            >
              JobSeeker
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/jobs"
              className="text-gray-700 hover:text-indigo-700 font-medium transition"
            >
              Browse Jobs
            </Link>
            {user?.role === 'employer' && (
              <Link
                to="/employer/jobs"
                className="text-gray-700 hover:text-indigo-700 font-medium transition"
              >
                Post a Job
              </Link>
            )}
          </div>

          {/* User Area */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label="Open user menu"
                >
                  <UserCircleIcon className="h-10 w-10 text-indigo-700" />
                  <span className="hidden md:inline font-semibold text-gray-800">
                    {user.name || user.email || 'Account'}
                  </span>
                </button>
                {/* Dropdown */}
                {menuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-52 bg-white border shadow-xl rounded-xl py-2 z-40 animate-fade-in"
                    onMouseLeave={() => setMenuOpen(false)}
                  >
                    <Link
                      to={user.role === 'employer' ? '/employer/dashboard' : '/profile'}
                      className="block px-5 py-2 text-gray-700 hover:bg-indigo-50 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      className="w-full text-left px-5 py-2 text-gray-700 hover:bg-indigo-50 transition"
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                        navigate('/');
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 font-medium rounded hover:bg-indigo-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Register
                </Link>
              </>
            )}

            {/* Hamburger for mobile */}
            <button
              className="lg:hidden ml-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={handleMenuToggle}
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-7 w-7 text-indigo-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-xl shadow-lg py-4 px-6 animate-fade-in">
            <Link
              to="/jobs"
              className="block py-2 text-gray-700 hover:text-indigo-700 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Browse Jobs
            </Link>
            {user?.role === 'employer' && (
              <Link
                to="/employer/jobs"
                className="block py-2 text-gray-700 hover:text-indigo-700 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Post a Job
              </Link>
            )}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="block py-2 text-gray-700 font-medium hover:bg-indigo-50 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 text-indigo-700 font-semibold hover:bg-indigo-50 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
            {user && (
              <>
                <Link
                  to={user.role === 'employer' ? '/employer/dashboard' : '/profile'}
                  className="block py-2 text-gray-700 hover:bg-indigo-50 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="block w-full text-left py-2 text-gray-700 hover:bg-indigo-50 rounded transition"
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;