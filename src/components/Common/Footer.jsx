const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-indigo-200 border-t border-indigo-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <span className="text-lg font-semibold text-indigo-700 mb-4 block">Services</span>
          <ul className="space-y-2">
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Job Search</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Job Posting</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Career Advice</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-semibold text-indigo-700 mb-4 block">Company</span>
          <ul className="space-y-2">
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">About us</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Contact</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-semibold text-indigo-700 mb-4 block">Legal</span>
          <ul className="space-y-2">
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Terms of use</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Privacy policy</a>
            </li>
            <li>
              <a className="transition text-gray-700 hover:text-indigo-600 hover:underline" href="#">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-indigo-200 pt-6 pb-4 text-center text-sm text-indigo-700 font-medium">
        <span>
          © {new Date().getFullYear()} JobFinder. All rights reserved.
        </span>
        <span className="block md:inline ml-0 md:ml-2">
          Crafted with <span className="text-pink-500">♥</span> by JobFinder Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;