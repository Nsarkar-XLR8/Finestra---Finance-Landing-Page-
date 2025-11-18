import React, { useState } from 'react';
import {  ArrowRight } from "lucide-react";
const CallToActionSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="px-6 md:px-12 py-20 max-w-full">
      <div className="bg-linear-to-br from-purple-100 via-pink-50 to-orange-100 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Let's Sit & Talk</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-8 py-5 rounded-full bg-white/70 backdrop-blur-sm border-none focus:outline-none text-base text-gray-400 placeholder-gray-400"
            />
            <button className="absolute right-2 top-2 w-12 h-12 bg-linear-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl transition-all shadow-lg flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;