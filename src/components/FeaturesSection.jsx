

const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;


const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Manage Money Wisely 📊
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mb-8">
            Manage your finances from one place. Personalize how and how to optimize
            your budget. Save simply, and take secure financial choices.
          </p>
          <button className="px-8 py-3.5 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg">
            Get Started Free
          </button>
        </div>
        
       
        <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-2xl shadow-pink-100 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-gray-800">Expense Statistics</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center text-xs">○</button>
              <button className="w-8 h-8 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center text-xs">▣</button>
            </div>
          </div>

          <div className="relative h-56 flex items-end justify-center gap-2 mb-8 bg-linear-to-b from-orange-50 to-transparent rounded-2xl p-4">
            {/* Bar Chart Mockup */}
            {[55, 75, 65, 95, 60, 80, 70, 85].map((height, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-t-xl hover:opacity-80 transition-opacity shadow-sm bg-linear-to-t from-orange-300 via-orange-400 to-orange-500" 
                style={{ height: `${height}%` }}
              ></div>
            ))}
            {/* Overlay Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                <p className="text-xs text-gray-500 mb-1">YOUR BALANCE</p>
                <p className="text-2xl font-bold text-gray-900">$540.00</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
             <div className="space-y-1">
                <h4 className="text-2xl font-bold text-gray-900">Budget Tracking</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Track progress, and get personalized insights.
                </p>
             </div>
             <button className="px-5 py-2 border-2 border-pink-300 text-pink-500 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <hr className="my-20 border-gray-100"/>

 
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
    
        <div className="md:w-1/2">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-purple-100 border border-gray-100">
            <div className="space-y-6">
             
                <div className="border-b pb-6 border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Connected Accounts</h3>
                        <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">View All →</button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl shadow-md"></div>
                            <span className="font-semibold text-gray-800">AB Bank</span>
                        </div>
                        <span className="font-bold text-xl text-gray-900">$25,350<span className="text-sm text-gray-500">.00</span></span>
                    </div>
                </div>

               
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg text-gray-800">Quick Transfer</h3>
                        <div className="flex gap-2">
                            <button className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">All</button>
                            <button className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold hover:bg-pink-200 transition-colors">Contacts</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-10">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft /></button>
                        <div className="flex gap-4 flex-1 justify-center">
                           
                            {[
                                { name: 'Alie', color: 'bg-red-300' },
                                { name: 'Sky', color: 'bg-green-300' },
                                { name: 'Florin', color: 'bg-blue-300' },
                                { name: 'Offer', color: 'bg-purple-300' }
                            ].map((person, i) => (
                                <div key={i} className="text-center">
                                    <div className={`w-14 h-14 ${person.color} rounded-full mb-2 hover:ring-4 ring-pink-200 transition-all cursor-pointer`}></div>
                                    <p className="text-xs text-gray-600 font-medium">{person.name}</p>
                                </div>
                            ))}
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight /></button>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-2 font-medium">Amount</p>
                            <p className="text-5xl font-bold text-gray-900">$349.00</p>
                        </div>
                        <button className="px-10 py-3.5 bg-linear-to-r from-pink-400 via-pink-500 to-red-400 text-white rounded-full font-semibold hover:shadow-xl transition-all shadow-lg">
                            Send
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2">
          <div className="inline-block px-5 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">
            Smart Automation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
            Maximizing Efficiency In Daily Finance 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Give your entire online financial picture in one place, alongside
            a dynamic approach in tracking and real-time updates.
          </p>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">
              <ChevronLeft />
            </button>
            <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">
              <ChevronRight />
            </button>
            <button className="px-10 py-3.5 bg-linear-to-r from-pink-400 via-pink-500 to-red-400 text-white rounded-full font-semibold hover:shadow-xl transition-all shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;