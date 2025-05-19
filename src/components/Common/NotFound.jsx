import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="max-w-lg w-full text-center p-8 rounded-2xl shadow-xl bg-white/80 border border-indigo-100">
        <div className="flex justify-center mb-6">
          {/* Elegant icon */}
          <svg
            className="h-20 w-20 text-indigo-400"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="32" cy="32" r="30" className="stroke-indigo-300" />
            <path d="M32 20v12" className="stroke-indigo-400 stroke-2" strokeLinecap="round" />
            <circle cx="32" cy="44" r="2" className="fill-indigo-400" />
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-2 tracking-tight">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;