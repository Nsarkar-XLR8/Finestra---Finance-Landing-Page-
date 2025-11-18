

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-linear-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <span className="font-bold text-xl">Finestra</span>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About Us</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Services</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
        <select className="text-gray-700 bg-transparent border-none font-medium cursor-pointer">
          <option>Eng</option>
          <option>Es</option>
        </select>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </button>
        <button className="px-5 py-2 border-2 border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;

