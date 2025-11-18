import { Star } from 'lucide-react';



const HeroSection = () => {
  return (
    <section className="text-center px-6 md:px-12 py-16 md:py-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold flex items-center gap-1">
          75% Save
        </span>
        <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold flex items-center gap-1">
          Trusted
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        Make Your Money<br />Work Harder
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Finextra is a platform where you can send, receive, exchange, and get your financial statements from anywhere in the world
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button className="px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg">
          Get Started Free
        </button>
        <button className="px-8 py-3.5 border-2 border-pink-400 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors flex items-center gap-2">
          <span className="w-6 h-6 border-2 border-pink-400 rounded-full flex items-center justify-center">▶</span>
          Watch a Demo
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 text-sm mb-16">
        <span className="text-pink-500 font-medium">★ Trustpilot</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
          ))}
        </div>
        <span className="text-gray-600">50,000 5 star reviews</span>
      </div>

      {/* Dashboard Preview */}
      <div className="relative mt-16">
        <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-5xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Sidebar */}
            <div className="w-full md:w-24 bg-linear-to-b from-purple-600 via-purple-600 to-indigo-700 rounded-2xl p-4 flex md:flex-col items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div className="w-12 h-12 bg-purple-500/50 rounded-xl"></div>
              <div className="w-12 h-12 bg-purple-500/50 rounded-xl"></div>
              <div className="w-12 h-12 bg-purple-500/50 rounded-xl"></div>
            </div>

            {/* Card Section */}
            <div className="flex-1 min-w-0">
              <div className="bg-linear-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium opacity-90">Balance</span>
                  <div className="flex gap-4 text-xs">
                    <span>1 D</span>
                    <span>1 W</span>
                    <span className="opacity-50">1 M</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold">$123 K</span>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">+12.5%</span>
                  <span className="text-lg">$325 M</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 60, 45, 75, 55, 85, 65, 90, 70, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-purple-400/60 rounded-t-sm hover:bg-purple-300/60 transition-colors" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-80 bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Dashboard</h3>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-2">Accounts</p>
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs text-gray-600">3/8</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">$78,821</span>
                  <span className="text-green-500 text-sm font-semibold">.88 +8%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-30">
        <span className="text-gray-400 font-semibold text-lg">Calendlex</span>
        <span className="text-gray-400 font-semibold text-lg">Quotient</span>
        <span className="text-gray-400 font-semibold text-lg">Hourglass</span>
        <span className="text-gray-400 font-semibold text-lg">Command+R</span>
        <span className="text-gray-400 font-semibold text-lg">Catalog</span>
        <span className="text-gray-400 font-semibold text-lg">Circooles</span>
      </div>
    </section>
  );
};

export default HeroSection;