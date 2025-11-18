import React from 'react';
// Assuming the icon library (e.g., Lucide or Font Awesome) is available for social icons


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-bold mb-5 text-base">Address</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              1642, Ives Ct, Bay, Michigan 48706<br />
              United States<br />
              +1(989) 506-3817
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-base">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-base">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Product</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">news & guideline</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-base">Help Center</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Free ebook</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Students</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">support</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 pt-8 border-t border-gray-200">
          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <p className="text-sm text-gray-600 text-center">© 2025 Copyright By Servlux - Finextra</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Really</a>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;